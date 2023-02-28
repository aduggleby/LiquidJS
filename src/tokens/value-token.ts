import { RangeToken } from './range-token'
import { LiteralToken } from './literal-token'
import { QuotedToken } from './quoted-token'
import { PropertyAccessToken } from './property-access-token'

export type ValueToken = RangeToken | LiteralToken | QuotedToken | PropertyAccessToken
