export class Review {

  author: number;

  // title: string;
  body: string;
  // date: Date;
  // endregion

  constructor(args?) {

    this.author = args.author;
    this.body = args.body;

  }
}
