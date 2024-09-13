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
  learning_objectives: LearningObjectivesData;
  learning_objectives_mm: string;
  instructional_materials: InstructionalMaterialsData;
  instructional_materials_mm: string;
  instructional_procedures: InstructionalProceduresData;
  instructional_procedures_mm: string;
  differentiation: DifferentiationData;
  differentiation_mm: string;
  assessment: AssessmentData;
  assessment_mm: string;
  technology_integration: TechnologyIntegrationData;
  technology_integration_mm: string;
  time_management: TimeManagementData;
  time_management_mm: string;
  reflection: ReflectionData;
  reflection_mm: string;
  thumbnail_url:string;
}

export interface InstructionalProcedure {
  step_number: number;
  title: string;
  description: { activity: string }[];
}

interface LearningObjectivesData {
  learning_objectives: { objective: string }[];
}

interface InstructionalMaterialsData {
  instructional_materials: { material: string }[];
}

interface InstructionalProceduresData {
  instructional_procedures: InstructionalProcedure[];
}

interface DifferentiationData {
  differentiation: { strategy: string }[];
}

interface AssessmentData {
  assessment: { method: string }[];
}

interface TechnologyIntegrationData {
  technology_integration: { tool: string }[];
}

interface TimeManagementData {
  time_management: { tip: string }[];
}

interface ReflectionData {
  reflection: { point: string }[];
}
