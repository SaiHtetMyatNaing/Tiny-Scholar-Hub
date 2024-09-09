export interface LessonPlanProps {
  title: string;
  title_mm: string;
  subject: string;
  subject_mm: string;
  grade_level: string;
  grade_level_mm: string;
  duration: string;
  duration_mm: string;
  learning_objectives: string[];
  learning_objectives_mm: string;
  instructional_materials: string[];
  instructional_materials_mm: string;
  instructional_procedures: InstructionalProcedure[];
  instructional_procedures_mm: string;
  differentiation: string[];
  differentiation_mm: string;
  assessment: string[];
  assessment_mm: string;
  technology_integration: string[];
  technology_integration_mm: string;
  time_management: string[];
  time_management_mm: string;
  reflection: string[];
  reflection_mm: string;
  }
  
export interface InstructionalProcedure {
    step_number: number;
    title: string;
    description: string[];

  }

  