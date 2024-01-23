import React, { useCallback, useEffect, useState, useMemo } from "react";

import { useParams } from "react-router-dom";

import { API_TOKEN } from "@/config/app.config";
import peopleService from "@/services/peopleService";
import Layout from "@/layouts/components/Layout";
import People from "@/layouts/People/People";
import { CastPeopleResult } from "@/types/people";
import { CombinedCredits } from "@/types/people";

const PeoplePage = () => {
  const { personId } = useParams();
  const [people, setPeople] = useState<CastPeopleResult | undefined>(undefined);
  const [combinedCredits, setCombinedCredits] = useState<
    CombinedCredits | undefined
  >(undefined);

  const getPeopleData = useCallback(async () => {
    if (personId !== undefined) {
      try {
        const PeopleData = await peopleService.getPeopleCredits(
          API_TOKEN,
          personId
        );
        setPeople(PeopleData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [personId, setPeople]);

  const getCombinedCredits = useCallback(async () => {
    if (personId !== undefined) {
      try {
        const combinedCreditsData = await peopleService.getCombinedCredits(
          API_TOKEN,
          personId
        );
        setCombinedCredits(combinedCreditsData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [personId]);

  useEffect(() => {
    getPeopleData();
    getCombinedCredits();
  }, [getPeopleData, getCombinedCredits]);

  const castCredit = useMemo(() => {
    if (combinedCredits)
      return combinedCredits.cast.sort((a, b) =>
        a.release_date > b.release_date ? -1 : 1
      );

    return undefined;
  }, [combinedCredits]);

  const crewCredit = useMemo(() => {
    if (combinedCredits) return combinedCredits.crew;

    return undefined;
  }, [combinedCredits]);

  const groupByCastData = useMemo(() => {
    if (combinedCredits) {
      const yearByCast = combinedCredits.cast.sort((a, b) =>
        a.release_date > b.release_date ? -1 : 1
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const finalObj: any = {};
      yearByCast.forEach((values) => {
        const date = values.release_date?.slice(0, 4);
        const firstAirDate = values.first_air_date?.slice(0, 4);

        if (date) {
          date !== ""
            ? (finalObj[date] = [values])
            : finalObj[date].push(values);
        } else {
          finalObj[firstAirDate] = [values];
        }
      });

      return finalObj;
    }

    return undefined;
  }, [combinedCredits]);

  return (
    <Layout>
      <People
        peopleData={people}
        castCredit={castCredit}
        crewCredit={crewCredit}
        yearByCast={groupByCastData}
      />
    </Layout>
  );
};

export default PeoplePage;
