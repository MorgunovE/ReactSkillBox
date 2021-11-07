const mistake = [] as Array<number>;
mistake.push(1);
// mistake.push('1');
let bigObject = {
  "commit": {
    "id": "1234123412341234123",
    "short_id": "12341234",
    "title": "JS fix",
    "author_name": "Example User",
    "author_email": "user@example.com",
    "created_at": "2014-02-27T10:27:00+02:00"
  },
  "commits" : [
    {
      "id": "123412332453235412341234123",
      "short_id": "123434531234",
      "title": "JS fix",
      "author_name": "Example User",
      "author_email": "user@example.com",
      "created_at": "2014-02-27T10:27:00+02:00"
    }
  ],
  "diffs": [{
    "old_path": "files/js/application.js",
    "new_path": "files/js/application.js",
    "a_mode": null,
    "b_mode": "13123",
    "new_file": false,
    "renamed_file": false,
    "deleted_file": false,
  }],
  "compare_timeout": false,
  "compare_same_ref": false
}
// bigObject.compare_same_ref = '123123'
bigObject.compare_same_ref = true
type TMyBigObject = typeof bigObject;
const typedBigObject: Readonly<TMyBigObject> = bigObject;
// typedBigObject.compare_same_ref =false;
typedBigObject.commit.id = "2113";

// type MyReadonly = {
//   readonly [N in 'asd' | 'qwe'] : N
// }
// const some2: MyReadonly = {
//   asd: 'asd',
//   qwe: 'qwe'
// }
type TObjKeys = keyof TMyBigObject;
type TCommitType = TMyBigObject['commit'];
type MyReadonly<T> = {
  readonly [N in keyof T] : T[N]
}
// const some2: MyReadonly<TMyBigObject> = {
//   compare_same_ref: true,
// }

type MyPartial<T> = {
  [N in keyof T]?:T[N]
}

type MyPick<T,K extends keyof T> = {
  [N in K]: T[N]
}
type picked = Pick<TMyBigObject, 'commit' | 'commits'>

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}
const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;
// typedBigObjectDeep.compare_same_ref =false;
// typedBigObjectDeep.commit.id = "2113";

type TSomeType = MyReadonlyDeep<TMyBigObject>
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;
type TTest = RemoveReadonly<TSomeType>;

function greaterThenZero(a:number, b:string) {
  return a > 0;
}
type FnReturnType<T> = T extends ((...args: any[])=> infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R)=> any) ? R : never;
type TReturnType = FnReturnType<typeof greaterThenZero>;
type TArgsType = FnParameters<typeof greaterThenZero>;