export interface IUser {
  /**
   * fullname for the user
   */
  fullname: string;

  /**
   * user handler, for example
   *
   * @the__b_a_e
   */
  username: string;

  /**
   * number of posts on the user's channel
   */
  posts: number;

  /**
   * sample of three photos
   */
  samplePhotos: Array<string>;

  /**
   * number of followers for this user
   */
  followers: number;

  /**
   * number of people that this user if following
   */
  following: number;

  /**
   * profile image for the user
   */
  avatar: string;
}

export type TPlacementZone = 'a' | 'b' | 'c' | 'd';

export interface IPreviewPosition {
  /**
   * the center Y of the card which has this tooltip
   */
  hostCenterX: number;

  /**
   * center Y of the card which has this tooltip
   */
  hostCenterY: number;

  /**
   * where this tooltip will be placed which can be one of the 4 zones
   */
  zone: TPlacementZone;
}
