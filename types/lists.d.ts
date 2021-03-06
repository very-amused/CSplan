/**
 * A list document received from the API
 * @encrypted
 * @param M Meta type used
 */
declare type ListDocument<M = IndexedMetaResponse> = M & EncryptedListData

/**
 * @encrypted
 */
declare type EncryptedListData = {
  title: string
  items: ListItem<true>[]
}

declare type ListItem<E extends boolean = false> = {
  title: string
  description: string
  done: E extends true ? string : boolean
  tags: string[]
}

declare type ListData = {
  title: string
  items: ListItem<false>[]
}

declare type List = Flags & IndexedMetaState & ListData

declare type ListStore = SMSXStore<List, ListData> & {
  // Commit all instances of a resource that have flagged updates
  async commitUnsaved?(): Promise<void>
  // Move a resource by modifying the necessary indexes
  async move?(id: string, index: number): Promise<void>
}