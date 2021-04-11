export type ExpertResult = {}

export default interface Expert<T> {
  work(props: unknown): Promise<T> | T
}