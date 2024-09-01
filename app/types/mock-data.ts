export interface MockDataProps {
    id: number;
    created_at: string; // Assuming you'll convert the string to a Date object
    name_mm: string;
    name_en: string;
    svg_content: string;
    updated_at: string; // Allowing for null as the data shows it can be NaN
    start_with: string;
  }