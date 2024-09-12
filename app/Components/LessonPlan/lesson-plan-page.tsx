"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { Mousewheel, Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import WorksheetHeader from "../WorkBook/workbook-header";
import WorkSheetFooter from "../WorkBook/workbook-footer";
import { Box, List, ListItem, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LessonPlanProps } from "@/app/types/lesson-plan";
import LessonPlanObjectiveBox from "./lesson-objectives-box";

const LessonPlanSection = ({ data }: { data: LessonPlanProps }) => {
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
          {data && (
            <Box className="flex  ml-6 flex-col gap-5">
              <Typography className="self-center mt-3 mb-2" variant="h6">
                {data.title}
              </Typography>

              <Box className="flex flex-col md:flex-row justify-between max-w-4xl mb-2 gap-4">
                <Box className="flex gap-1">
                  <Typography>{data.title_mm} - </Typography>
                  <Typography variant="body1">{data.subject}</Typography>
                </Box>

                <Box className="flex gap-1">
                  <Typography>{data.grade_level_mm} - </Typography>
                  <Typography variant="body1">{data.grade_level}</Typography>
                </Box>

                <Box className="flex gap-1">
                  <Typography>{data.duration_mm} - </Typography>
                  <Typography variant="body1">{data.duration}</Typography>
                </Box>
              </Box>

              <LessonPlanObjectiveBox
                title={data.learning_objectives_mm}
                description={data.learning_objectives.learning_objectives.map(
                  (item) => item.objective
                )}
              />

              <LessonPlanObjectiveBox
                title={data.instructional_materials_mm}
                description={data.instructional_materials.instructional_materials.map(
                  (item) => item.material
                )}
              />

              <LessonPlanObjectiveBox
                title={data.differentiation_mm}
                description={data.differentiation.differentiation.map(
                  (item) => item.strategy
                )}
              />

              <LessonPlanObjectiveBox
                title={data.assessment_mm}
                description={data.assessment.assessment.map(
                  (item) => item.method
                )}
              />

              <LessonPlanObjectiveBox
                title={data.technology_integration_mm}
                description={data.technology_integration.technology_integration.map(
                  (item) => item.tool
                )}
              />

              <LessonPlanObjectiveBox
                title={data.time_management_mm}
                description={data.time_management.time_management.map(
                  (item) => item.tip
                )}
              />

              <LessonPlanObjectiveBox
                title={data.reflection_mm}
                description={data.reflection.reflection.map(
                  (item) => item.point
                )}
              />
            </Box>
          )}
          <WorkSheetFooter />
        </SwiperSlide>
        {/* Lesson Plan Page Two */}
        <SwiperSlide className=" border border-[#ffd700] rounded-md  p-3 w-full">
          <WorksheetHeader />

          <Box className="h-[87.5em]">
            <Box className="flex w-full  italic ml-5 gap-3 flex-col ">
              {data.instructional_procedures.instructional_procedures.map(
                (procedure, i) => {
                  return (
                    <Box key={i}>
                      <Typography className="font-bold">
                        {procedure.title}
                      </Typography>
                      <List>
                        {procedure.description.map((obj, i) => {
                          return <ListItem key={i}>{obj.activity}</ListItem>;
                        })}
                      </List>
                    </Box>
                  );
                }
              )}
            </Box>
          </Box>

          <WorkSheetFooter />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default LessonPlanSection;
