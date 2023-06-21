export interface IPost {
  id: number
  title: string
  body: string
  userId: number
  tags: Array<string>
  reactions: number
}

export interface IUser {
  id: number
  username: string
}

export interface IComment {
  id: number
  body: string
  postId: number
  user: IUser
}
