import OAuth2Server from 'oauth2-server';
import model,{ } from './model2'

export const oauthServer = new OAuth2Server({
    model: model,
    accessTokenLifetime: 60, // 秒
})