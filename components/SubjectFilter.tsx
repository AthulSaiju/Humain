'use client';
import React, { useEffect, useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("subject") || "all";

  const [subject, setSubject] = useState(initialQuery);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip on first mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    let newUrl: string;
    if (subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }

    // Only push if something actually changed
    if (newUrl !== window.location.pathname + window.location.search) {
      router.push(newUrl, { scroll: false });
    }
  }, [subject, router, searchParams]);

  return (
    <Select onValueChange={setSubject} value={subject} >
      <SelectTrigger className="input2 capitalize bg-white ">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((subj) => (
          <SelectItem key={subj} value={subj} className="capitalize">
            {subj}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
