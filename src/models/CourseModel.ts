export interface ICourseList {
  id: number;
  createdAt: string;
  title: string;
  duration: number;
  courseCategory: string;
  courseLevel: string;
  description: string;
  coverImageUrl: string;
  numOfChapters: number;
  numOfLectures: number;
  averageReviewRating: number;
  numOfReviews: number;
  basePrice: number;
}

export interface ICourseDetail {
  id: number;
  createdAt: string;
  title: string;
  duration: number;
  courseCategory: string;
  courseLevel: string;
  description: string;
  coverImageUrl: string;
  numOfChapters: number;
  numOfLectures: number;
  averageReviewRating: number;
  numOfReviews: number;
  basePrice: number;
}

export interface ICourseCategory {
  totalRecords: number;
  data: {
    id: number;
    name: string;
  }[];
}
export interface ICourseCategoryRowObj {
  id: number;
  name: string;
}
