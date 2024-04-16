export interface FacultyCardParams {
  imageUrl: string;
  facultyName: string;
  facultyDesc: string;
}

export interface FacultyCardCarouselParams {
  facultyInfo: FacultyCardParams[];
  cardsNum: number
}
