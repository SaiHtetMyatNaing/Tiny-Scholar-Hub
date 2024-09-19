"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DataTable } from "./data-table";
import { StorySegmentColumns } from "./story-column";
import { ImageColumns } from "./image-columns";
import { LessonPlanSegmentColumns } from "./lesson-plan-column";
import { LessonPlanProps } from "@/app/types/lesson-plan";
import { FlashcardProps, StorySegmentProps } from "@/app/lib/type";
import { FlashCardProps } from "../FlashCard/card-stack-section";


export default function AdminPanel({
  LessonPlanData,
  StoryData,
  FlashCardsData,
}: {
  StoryData: StorySegmentProps[];
  LessonPlanData: LessonPlanProps[];
  FlashCardsData : FlashcardProps[];
}) {
  const [value, setValue] = React.useState("2");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderColor: "black" }} className="max-w-sm mx-auto">
          <TabList onChange={handleChange}>
            <Tab label="Flashcards" value="1" />
            <Tab label="Story" value="2" />
            <Tab label="Lesson Plan" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DataTable columns={ImageColumns} data={FlashCardsData} />
        </TabPanel>
        <TabPanel value="2">
          <DataTable columns={StorySegmentColumns} data={StoryData} />
        </TabPanel>
        <TabPanel value="3">
          <DataTable columns={LessonPlanSegmentColumns} data={LessonPlanData} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
