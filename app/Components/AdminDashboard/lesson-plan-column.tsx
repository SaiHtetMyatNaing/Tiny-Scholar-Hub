import { ColumnDef } from "@tanstack/react-table";
import { Box, Typography } from "@mui/material";
import DeleteDialog from "./delete-dialog";
import { LessonPlanProps } from "@/app/types/lesson-plan";
import { LessonPlanEditForm } from "../Form/lesson-plan-edit-form";
import DialogBox from "../dialog";

export const LessonPlanSegmentColumns: ColumnDef<LessonPlanProps>[] = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Title",
    accessorKey: "title",
    minSize: 220,
    
  },
  {
    header: "Subject",
    accessorKey: "subject",
    minSize: 100,

  },
  {
    header: "Grade Level",
    accessorKey: "grade_level",
    minSize: 120,

  },
  {
    header: "Duration",
    accessorKey: "duration",
    minSize: 100,

  },
  {
    header: "Learning Objectives",
    accessorKey: "learning_objectives",
    minSize: 200,

    cell: ({ row }) => {
      const objectives = row.original.learning_objectives.learning_objectives;
      const transformedData = {
        sentences: objectives.map((item) => ({
          sentence: item.objective,
        })),
      };
      return (
        <DialogBox title={row.original.learning_objectives_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("Success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Instructional Materials",
    accessorKey: "instructional_materials",
    minSize: 200,

    cell: ({ row }) => {
      const materials =
        row.original.instructional_materials.instructional_materials;
      const transformedData = {
        sentences: materials.map((item) => ({
          sentence: item.material,
        })),
      };

      return (
        <DialogBox title={row.original.instructional_materials_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("Success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Instructional Procedures",
    accessorKey: "instructional_procedures",
    minSize: 220,

    cell: ({ row }) => {
      const procedures =
        row.original.instructional_procedures.instructional_procedures;
      const transformedData = {
        sentences: procedures.map((item) => ({
          sentence: item.description.map((item) => item.activity).join("\n"),
        })),
      };
      return (
        <DialogBox title={row.original.instructional_procedures_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("Success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Differentiation",
    accessorKey: "differentiation",
    minSize: 220,

    cell: ({ row }) => {
      const differentiations = row.original.differentiation.differentiation;
      const transformedData = {
        sentences: differentiations.map((item) => ({
          sentence: item.strategy,
        })),
      };

      return (
        <DialogBox title={row.original.differentiation_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("Success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Assessment",
    accessorKey: "assessment",
    minSize: 150,

    cell: ({ row }) => {
      const assessments = row.original.assessment.assessment;
      const transformedData = {
        sentences: assessments.map((item) => ({
          sentence: item.method,
        })),
      };

      return (
        <DialogBox title={row.original.assessment_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("Success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Technology Integration",
    accessorKey: "technology_integration",
    minSize: 200,

    cell: ({ row }) => {
      const integrations =
        row.original.technology_integration.technology_integration;
      const transformedData = {
        sentences: integrations.map((item) => ({
          sentence: item.tool,
        })),
      };

      return (
        <DialogBox title={row.original.technology_integration_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("Success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Time Management",
    accessorKey: "time_management",
    minSize: 180,

    cell: ({ row }) => {
      const managements = row.original.time_management.time_management;
      const transformedData = {
        sentences: managements.map((item) => ({
          sentence: item.tip,
        })),
      };

      return (
        <DialogBox title={row.original.time_management_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("Success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Reflection",
    accessorKey: "reflections",
    minSize: 220,

    cell: ({ row }) => {
      const reflections = row.original.reflection.reflection;
      const transformedData = {
        sentences: reflections.map((item) => ({
          sentence: item.point,
        })),
      };

      return (
        <DialogBox title={row.original.reflection_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Product Control",
    accessorKey: "options",
    minSize: 220,

    cell: ({ row }) => {
      return (
        <Box className="flex gap-2">
          <DeleteDialog id={row.original.id} />
        </Box>
      );
    },
  },
  {
    id: "action",
    header: () => <DialogBox title="Create">Hello</DialogBox>,
    accessorKey: "action",
    size: 30,
  },
];
