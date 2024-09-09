"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { Mousewheel, Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import WorksheetHeader from "../WorkBook/workbook-header";
import WorkSheetFooter from "../WorkBook/workbook-footer";
import LessonPlanObjectiveBox from "./lesson-objectives-box";
import { LessonPlanProps } from "@/app/types/lesson-plan";
import { lessonPlan } from "@/app/lib/lesson-plan";
import { Box, List, ListItem, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const LessonPlanSection = () => {
  const lessonPlanData: LessonPlanProps[] = useMemo(() => lessonPlan, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full "
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {/* Lesson Plan Page One */}
        <SwiperSlide className="border border-[#ffd700] rounded-md p-3">
          <WorksheetHeader />
          {lessonPlanData.map((lesson, i) => {
            return (
              <Box key={i} className="flex  ml-6 flex-col gap-5">
                <Typography className="self-center mt-3 mb-2" variant="h6">
                  {lesson.title}
                </Typography>

                <Box className="flex justify-between max-w-4xl mb-2 gap-4">
                  <Box className="flex gap-1">
                    <Typography>{lesson.title_mm} - </Typography>
                    <Typography variant="body1">{lesson.subject}</Typography>
                  </Box>

                  <Box className="flex gap-1">
                    <Typography>{lesson.grade_level_mm} - </Typography>
                    <Typography variant="body1">
                      {lesson.grade_level}
                    </Typography>
                  </Box>

                  <Box className="flex gap-1">
                    <Typography>{lesson.duration_mm} - </Typography>
                    <Typography variant="body1">{lesson.duration}</Typography>
                  </Box>
                </Box>

                <LessonPlanObjectiveBox
                  title={lesson.learning_objectives_mm}
                  description={lesson.learning_objectives}
                />

                <LessonPlanObjectiveBox
                  title={lesson.instructional_materials_mm}
                  description={lesson.instructional_materials}
                />

                <LessonPlanObjectiveBox
                  title={lesson.differentiation_mm}
                  description={lesson.differentiation}
                />

                <LessonPlanObjectiveBox
                  title={lesson.assessment_mm}
                  description={lesson.assessment}
                />

                <LessonPlanObjectiveBox
                  title={lesson.technology_integration_mm}
                  description={lesson.technology_integration}
                />

                <LessonPlanObjectiveBox
                  title={lesson.time_management_mm}
                  description={lesson.time_management}
                />

                <LessonPlanObjectiveBox
                  title={lesson.reflection_mm}
                  description={lesson.reflection}
                />
              </Box>
            );
          })}
          <WorkSheetFooter />
        </SwiperSlide>
        {/* Lesson Plan Page Two */}
        <SwiperSlide className=" border border-[#ffd700] rounded-md  p-3 w-full">
          <WorksheetHeader />

          <Box className="h-[87.5em]">
            {lessonPlanData.map((lesson, i) => {
              return (
                <Box
                  key={i}
                  className="flex w-full  italic ml-5 gap-3 flex-col "
                >
                  {lesson.instructional_procedures.map((procedure, i) => {
                    return (
                      <Box key={i}>
                        <Typography className="font-bold">
                          {procedure.title}
                        </Typography>
                        <List>
                          {procedure.description.map((obj, i) => {
                            return <ListItem key={i}>{obj}</ListItem>;
                          })}
                        </List>
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </Box>

          <WorkSheetFooter />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default LessonPlanSection;
