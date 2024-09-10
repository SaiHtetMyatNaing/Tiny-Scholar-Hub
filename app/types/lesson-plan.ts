export interface LessonPlanProps {
  id: number;
  title: string;
  title_mm: string;
  subject: string;
  subject_mm: string;
  grade_level: string;
  grade_level_mm: string;
  duration: string;
  duration_mm: string;
  learning_objectives: {objective : string}[] ;
  learning_objectives_mm: string;
  instructional_materials: { material : string }[];
  instructional_materials_mm: string;
  instructional_procedures: InstructionalProcedure[];
  instructional_procedures_mm: string;
  differentiation: { strategy : string}[];
  differentiation_mm: string;
  assessment: { method : string}[];
  assessment_mm: string;
  technology_integration: { tool : string}[];
  technology_integration_mm: string;
  time_management: { tip : string}[];
  time_management_mm: string;
  reflection: {point : string}[];
  reflection_mm: string;
  }
  
export interface InstructionalProcedure {
    step_number: number;
    title: string;
    description: { activity : string }[];

  }

  