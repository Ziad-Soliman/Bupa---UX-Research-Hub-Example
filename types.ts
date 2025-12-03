export interface KPIData {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  status: 'success' | 'warning' | 'danger';
  subtext?: string;
}

export interface RadarDataPoint {
  metric: string;
  Bupa: number;
  Tawuniya: number;
  AlNahdi: number;
  fullMark: number;
}

export interface TaskDurationData {
  task: string;
  Bupa: number;
  MarketAvg: number;
  Tawuniya: number; // Benchmark leader
}

export interface FeedbackItem {
  id: string;
  userAvatar: string;
  segment: string;
  sentiment: 'positive' | 'neutral' | 'negative' | 'frustrated';
  tag: string;
  comment: string;
  timestamp: string;
  hasVideo: boolean;
  videoUrl?: string; // Mock URL
}

export interface NavItem {
  id: string;
  label: string;
  icon: any;
}

export interface TrendDataPoint {
  month: string;
  nps: number;
  trust: number;
}

export interface SessionEvent {
  time: string;
  type: 'click' | 'rage_click' | 'navigation' | 'input';
  description: string;
}

export interface TranscriptLine {
  time: string;
  speaker: 'Moderator' | 'User';
  text: string;
}

export interface ReportItem {
  id: string;
  title: string;
  date: string;
  type: 'Weekly' | 'Monthly' | 'Ad-hoc';
  status: 'Ready' | 'Generating';
  size: string;
}

export interface FeatureComparison {
  feature: string;
  bupa: boolean | 'partial';
  tawuniya: boolean | 'partial';
  alnahdi: boolean | 'partial';
  fakeeh: boolean | 'partial';
}

export interface SentimentTrend {
  date: string;
  positive: number;
  neutral: number;
  negative: number;
}

export interface TopicSentiment {
  topic: string;
  positive: number;
  negative: number;
  neutral: number;
}

export interface SentimentKeyword {
  word: string;
  count: number;
  type: 'positive' | 'negative';
}