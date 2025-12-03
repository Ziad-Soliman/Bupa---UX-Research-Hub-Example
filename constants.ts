import { KPIData, RadarDataPoint, TaskDurationData, FeedbackItem, TrendDataPoint, SessionEvent, TranscriptLine, ReportItem, FeatureComparison, SentimentTrend, TopicSentiment, SentimentKeyword } from './types';

export const KPI_METRICS: KPIData[] = [
  {
    label: "NPS Score",
    value: "+42",
    change: 5,
    trend: "up",
    status: "success",
    subtext: "Highest Trust in Market"
  },
  {
    label: "SUS Score",
    value: "68",
    change: -2,
    trend: "down",
    status: "warning",
    subtext: "System Usability Scale / 100"
  },
  {
    label: "Task Success Rate",
    value: "74%",
    change: 1.2,
    trend: "up",
    status: "warning",
    subtext: "Target: 85%"
  },
  {
    label: "Avg Time on Task",
    value: "2m 45s",
    change: 15, // Increased time is bad
    trend: "up", 
    status: "danger",
    subtext: "Slower than Market (2m 10s)"
  }
];

// Narrative: Bupa wins Trust, Tawuniya wins Speed, Al Nahdi wins Login/Ease
export const RADAR_DATA: RadarDataPoint[] = [
  { metric: "Speed", Bupa: 65, Tawuniya: 95, AlNahdi: 80, fullMark: 100 },
  { metric: "Aesthetics", Bupa: 85, Tawuniya: 75, AlNahdi: 90, fullMark: 100 },
  { metric: "Brand Trust", Bupa: 98, Tawuniya: 88, AlNahdi: 85, fullMark: 100 },
  { metric: "Feature Clarity", Bupa: 70, Tawuniya: 80, AlNahdi: 85, fullMark: 100 },
  { metric: "Ease of Login", Bupa: 60, Tawuniya: 85, AlNahdi: 95, fullMark: 100 },
];

// Narrative: Highlight "Submit Claim" disparity
export const BAR_DATA: TaskDurationData[] = [
  { task: "Login", Bupa: 25, MarketAvg: 20, Tawuniya: 15 },
  { task: "Find Doctor", Bupa: 45, MarketAvg: 40, Tawuniya: 35 },
  { task: "Submit Claim", Bupa: 150, MarketAvg: 110, Tawuniya: 90 }, // The pain point
  { task: "Policy Renewal", Bupa: 180, MarketAvg: 160, Tawuniya: 140 },
];

export const FEEDBACK_ITEMS: FeedbackItem[] = [
  {
    id: "1",
    userAvatar: "https://picsum.photos/id/1005/50/50",
    segment: "End Member (Saudi Male, 34)",
    sentiment: "frustrated",
    tag: "Rage Click",
    comment: "I keep clicking the IBAN field but the keyboard disappears. It's impossible to enter my bank details.",
    timestamp: "2 mins ago",
    hasVideo: true
  },
  {
    id: "2",
    userAvatar: "https://picsum.photos/id/1011/50/50",
    segment: "Decision Maker (HR Manager)",
    sentiment: "neutral",
    tag: "Corporate Portal",
    comment: "Adding a dependent was clearer this time, but the bulk upload feature for employees is still hidden deep in the menu.",
    timestamp: "15 mins ago",
    hasVideo: true
  },
  {
    id: "3",
    userAvatar: "https://picsum.photos/id/1027/50/50",
    segment: "End Member (Expat Female, 29)",
    sentiment: "positive",
    tag: "Telemedicine",
    comment: "The connection with the doctor was much faster than Fakeeh. I felt the video quality was also better.",
    timestamp: "1 hour ago",
    hasVideo: true
  },
  {
    id: "4",
    userAvatar: "https://picsum.photos/id/338/50/50",
    segment: "Competitor User (Tawuniya)",
    sentiment: "negative",
    tag: "Comparison",
    comment: "Why does Bupa ask for so many documents? On Tawuniya I just snapped one photo and it was done.",
    timestamp: "3 hours ago",
    hasVideo: true
  }
];

export const TREND_DATA: TrendDataPoint[] = [
  { month: 'Jan', nps: 35, trust: 88 },
  { month: 'Feb', nps: 38, trust: 89 },
  { month: 'Mar', nps: 36, trust: 90 },
  { month: 'Apr', nps: 40, trust: 92 },
  { month: 'May', nps: 39, trust: 95 },
  { month: 'Jun', nps: 42, trust: 98 },
];

// Mock data for the detailed session modal
export const SESSION_TRANSCRIPT: TranscriptLine[] = [
  { time: "00:05", speaker: "Moderator", text: "Please try to submit a reimbursement claim for your last visit." },
  { time: "00:12", speaker: "User", text: "Okay, I'm tapping 'Claims'... loading is a bit slow." },
  { time: "00:30", speaker: "User", text: "Found it. Uploading the invoice now." },
  { time: "00:45", speaker: "User", text: "Alright, scrolling down to bank details." },
  { time: "00:48", speaker: "User", text: "Wait, I'm tapping the IBAN box... nothing is happening." },
  { time: "00:52", speaker: "User", text: "I'm tapping it again. Why is the keyboard closing?" },
  { time: "00:55", speaker: "User", text: "This is really annoying. I can't type the number." },
];

export const SESSION_EVENTS: SessionEvent[] = [
  { time: "00:15", type: "navigation", description: "Navigated to Claims Screen" },
  { time: "00:48", type: "input", description: "Focused IBAN Field" },
  { time: "00:50", type: "rage_click", description: "Rage Click Detected (5 taps in 2s)" },
  { time: "00:55", type: "rage_click", description: "Rage Click Detected (3 taps in 1s)" },
];

export const REPORTS_DATA: ReportItem[] = [
  { id: '1', title: 'Week 24 Insights: Claim Submission Friction', date: 'Oct 15, 2023', type: 'Weekly', status: 'Ready', size: '2.4 MB' },
  { id: '2', title: 'Competitor Benchmark: Tawuniya App Update', date: 'Oct 08, 2023', type: 'Ad-hoc', status: 'Ready', size: '1.8 MB' },
  { id: '3', title: 'Monthly Executive Summary: September', date: 'Oct 01, 2023', type: 'Monthly', status: 'Ready', size: '4.2 MB' },
  { id: '4', title: 'Week 23 Insights: Login Success Rates', date: 'Sep 24, 2023', type: 'Weekly', status: 'Ready', size: '2.1 MB' },
];

export const B2B_METRICS: KPIData[] = [
  { label: "Corporate NPS", value: "+58", change: 2, trend: "up", status: "success", subtext: "HR Managers love the new portal" },
  { label: "Bulk Upload Errors", value: "12%", change: 5, trend: "down", status: "danger", subtext: "High failure rate on Excel import" },
  { label: "Avg Time to Add Emp", value: "45s", change: -10, trend: "up", status: "success", subtext: "Improved from 1m 15s" },
];

export const FEATURE_MATRIX: FeatureComparison[] = [
  { feature: "Biometric Login", bupa: true, tawuniya: true, alnahdi: true, fakeeh: false },
  { feature: "Instant Claim Approval", bupa: 'partial', tawuniya: true, alnahdi: false, fakeeh: 'partial' },
  { feature: "Apple Pay Integration", bupa: true, tawuniya: true, alnahdi: true, fakeeh: true },
  { feature: "Family Profile Linking", bupa: true, tawuniya: 'partial', alnahdi: false, fakeeh: true },
  { feature: "Video Consultation", bupa: true, tawuniya: true, alnahdi: true, fakeeh: true },
  { feature: "Pharmacy Delivery Tracking", bupa: false, tawuniya: false, alnahdi: true, fakeeh: false },
];

export const SENTIMENT_TREND_DATA: SentimentTrend[] = [
  { date: 'Mon', positive: 45, neutral: 30, negative: 25 },
  { date: 'Tue', positive: 50, neutral: 35, negative: 15 },
  { date: 'Wed', positive: 40, neutral: 25, negative: 35 }, // Spike in negative due to outage/bug
  { date: 'Thu', positive: 55, neutral: 30, negative: 15 },
  { date: 'Fri', positive: 60, neutral: 25, negative: 15 },
  { date: 'Sat', positive: 58, neutral: 32, negative: 10 },
  { date: 'Sun', positive: 65, neutral: 25, negative: 10 },
];

export const TOPIC_SENTIMENT_DATA: TopicSentiment[] = [
  { topic: 'Login / Auth', positive: 80, neutral: 10, negative: 10 },
  { topic: 'Telehealth', positive: 75, neutral: 15, negative: 10 },
  { topic: 'Policy View', positive: 60, neutral: 30, negative: 10 },
  { topic: 'Claims', positive: 20, neutral: 20, negative: 60 }, // Major pain point
  { topic: 'Payment', positive: 90, neutral: 5, negative: 5 },
];

export const KEYWORDS_DATA: SentimentKeyword[] = [
  { word: 'Fast', count: 85, type: 'positive' },
  { word: 'Secure', count: 64, type: 'positive' },
  { word: 'Easy', count: 58, type: 'positive' },
  { word: 'Helpful', count: 42, type: 'positive' },
  { word: 'Keyboard', count: 72, type: 'negative' }, // Linked to the bug
  { word: 'Crash', count: 35, type: 'negative' },
  { word: 'Slow', count: 28, type: 'negative' },
  { word: 'Error', count: 24, type: 'negative' },
];