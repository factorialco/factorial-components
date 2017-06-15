// @flow
import Document from 'stores/models/Document'
import Employee from 'stores/models/Employee'
import { Collection } from 'mobx-rest'
import users from 'stores/collections/users'
import moment from 'moment'

import type { DocumentType } from 'stores/models/Document'

type CreateFromOptions = {
  file: File,
  employee?: Employee,
  type: ?DocumentType
}

class Documents<T: Document> extends Collection<T> {
  url (): string {
    return `/documents`
  }

  model (): Class<Document> {
    return Document
  }

  createFrom ({ file, employee, type }: CreateFromOptions) {
    const data = {
      type,
      file,
      content_type: file.type,
      author_id: users.current.get('id'),
      created_at: moment().unix(),
      employee_id: employee ? employee.get('id') : null,
      filename: file.name,
      public: false
    }

    return this.create(data, { optimistic: true })
  }

  bulkUpload ({ file, type }: CreateFromOptions) {
    const data = {
      type,
      file,
      content_type: file.type,
      created_at: moment().unix(),
      filename: file.name,
      public: false
    }

    return this.rpc('bulk_upload', data)
  }
}

const singleton: Documents<Document> = new Documents()

export { Documents }
export default singleton
