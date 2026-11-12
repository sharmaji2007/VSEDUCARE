export type BoardType = 'CBSE' | 'ICSE' | 'Foreign Board';

export type ClassLevel = 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ComboKey =
  | 'maths'
  | 'science'
  | 'social_science'
  | 'math_social'
  | 'science_social'
  | 'math_science'
  | 'math_science_social';

export type BatchMode = 'online' | 'offline';

export interface ComboOption {
  key: ComboKey;
  number: number;
  label: string;
  badge?: string;
  subjects: string[];
  description: string;
  monthlyBasePrice: number;
  popular?: boolean;
}

export interface NoteItem {
  id: string;
  title: string;
  board: BoardType;
  classLevel: ClassLevel;
  subject: 'Maths' | 'Science' | 'Social Science';
  chaptersCount: number;
  pages: number;
  price: number;
  originalPrice: number;
  rating: number;
  downloadsCount: number;
  highlights: string[];
  previewPages: string[];
  sampleQuestion: string;
}

export interface DoubtThread {
  id: string;
  studentName: string;
  classLevel: ClassLevel;
  board: BoardType;
  subject: string;
  topic: string;
  question: string;
  askedTime: string;
  status: 'Answered' | 'In Progress';
  teacherReply?: {
    teacherName: string;
    avatarUrl?: string;
    replyTime: string;
    text: string;
    solutionSteps?: string[];
    tips?: string;
  };
}

export interface AttendanceEntry {
  date: string;
  day: string;
  status: 'Present' | 'Absent' | 'Exempted';
  timeAttended?: string;
  duration?: string;
  platform?: 'Google Meet (Live)' | 'Offline Center';
  notes?: string;
}

export interface TestScoreEntry {
  id: string;
  title: string;
  subject: string;
  date: string;
  marksObtained: number;
  totalMarks: number;
  percentage: number;
  classAverage: number;
  highestMarks: number;
  rank: string;
  feedback: string;
}

export interface AssignmentEntry {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  submittedOn?: string;
  status: 'Submitted' | 'Late' | 'Pending';
  score?: string;
  remarks: string;
}

export interface StudentWardProfile {
  wardId: string;
  studentName: string;
  parentName: string;
  parentPhone: string;
  classLevel: ClassLevel;
  board: BoardType;
  enrolledCombo: string;
  batchMode: BatchMode;
  batchTiming: string;
  attendanceRate: number;
  averageScore: number;
  assignmentsCompletedRate: number;
  attendance: AttendanceEntry[];
  tests: TestScoreEntry[];
  assignments: AssignmentEntry[];
  teacherMessage: string;
}

export interface BatchAnnouncement {
  id: string;
  title: string;
  board: BoardType | 'All Boards';
  classGrade: string;
  mode: 'Online (Google Meet)' | 'Offline Center' | 'Hybrid';
  timing: string;
  startDate: string;
  seatsLeft: number;
  totalSeats: number;
  isNew?: boolean;
}
