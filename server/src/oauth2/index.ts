import OAuth2Server from 'oauth2-server';
import { Model} from './model'

export const oauthServer = new OAuth2Server({
    model: new Model(),
    accessTokenLifetime: 60, // 秒
})