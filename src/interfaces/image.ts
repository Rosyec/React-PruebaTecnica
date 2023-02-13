export interface Image {
    id:                       string;
    created_at:               string;
    updated_at:               string;
    promoted_at:              string;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    description:              null;
    alt_description:          string;
    urls:                     Urls;
    links:                    Untitled1_Links;
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              null;
    topic_submissions:        TopicSubmissions;
    user:                     User;
    exif:                     Exif;
    location:                 Location;
    views:                    number;
    downloads:                number;
}

export interface Exif {
    make:          null;
    model:         null;
    name:          null;
    exposure_time: null;
    aperture:      null;
    focal_length:  null;
    iso:           null;
}

export interface Untitled1_Links {
    self:              string;
    html:              string;
    download:          string;
    download_location: string;
}

export interface Location {
    name:     null;
    city:     null;
    country:  null;
    position: Position;
}

export interface Position {
    latitude:  number;
    longitude: number;
}

export interface TopicSubmissions {
    "3d-renders": The3DRenders;
}

export interface The3DRenders {
    status: string;
}

export interface Urls {
    raw:      string;
    full:     string;
    regular:  string;
    small:    string;
    thumb:    string;
    small_s3: string;
}

export interface User {
    id:                 string;
    updated_at:         string;
    username:           string;
    name:               string;
    first_name:         string;
    last_name:          string;
    twitter_username:   string;
    portfolio_url:      string;
    bio:                string;
    location:           string;
    links:              UserLinks;
    profile_image:      ProfileImage;
    instagram_username: string;
    total_collections:  number;
    total_likes:        number;
    total_photos:       number;
    accepted_tos:       boolean;
    for_hire:           boolean;
    social:             Social;
}

export interface UserLinks {
    self:      string;
    html:      string;
    photos:    string;
    likes:     string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}

export interface Social {
    instagram_username: string;
    portfolio_url:      string;
    twitter_username:   string;
    paypal_email:       null;
}