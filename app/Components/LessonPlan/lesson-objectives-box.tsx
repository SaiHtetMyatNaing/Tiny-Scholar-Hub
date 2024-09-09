import { Box, Typography, List, ListItem } from "@mui/material";
import React from "react";

type ListBoxProps = {
    title : string ,
    description : string[]
}

const LessonPlanObjectiveBox = ({title , description } : ListBoxProps) => {
  return (
    <Box className="flex w-full gap-3 flex-col">
      <Typography className="font-bold">{title}</Typography>
      <List>
        {description.map((obj, i) => {
          return <ListItem  className='italic' key={i}>{obj}</ListItem>;
        })}
      </List>
    </Box>
  );
};

export default LessonPlanObjectiveBox;
