import { ColumnDef } from "@tanstack/react-table";
import { Box } from "@mui/material";
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
  },
  {
    header: "Subject",
    accessorKey: "subject",
  },
  {
    header: "Grade Level",
    accessorKey: "grade_level",
  },
  {
    header: "Duration",
    accessorKey: "duration",
  },
  {
    header: "Learning Objectives",
    accessorKey: "learning_objectives",
    cell: ({ row }) => {
      const objectives = row.original.learning_objectives;
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
    cell: ({ row }) => {
      const materials = row.original.instructional_materials;
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
    cell: ({ row }) => {
      const procedures = row.original.instructional_procedures;
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
    cell: ({ row }) => {
      const differentiations = row.original.differentiation;
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
    cell: ({ row }) => {
      const assessments = row.original.assessment;
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
    cell: ({ row }) => {
      const integrations = row.original.technology_integration;
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
    cell: ({ row }) => {
      const managements = row.original.time_management;
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
    accessorKey: "reflection",
    cell: ({ row }) => {
      const reflections = row.original.reflection;
      const transformedData = {
        sentences: reflections.map((item) => ({
          sentence: item.point,
        })),
      };

      return (
        <DialogBox title={row.original.reflection_mm}>
          <LessonPlanEditForm
            onSubmit={() => console.log("Success")}
            formData={transformedData}
          />
        </DialogBox>
      );
    },
  },
  {
    header: "Product Control",
    accessorKey: "options",
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
