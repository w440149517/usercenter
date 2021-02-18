import OAuth2, {AuthorizationCodeModel, AuthorizationCode } from 'oauth2-server'

// 授权码
const oauthCode: AuthorizationCode = {
    authorizationCode: '',
    expiresAt: new Date(),
    redirectUri: '',
    client: {
        id: '',
        grants: '',
        redirectUris: '',
        accessTokenLifetime: 0,
        refreshTokenLifetime: 0,
    },
    user: {},
}
// 没实现的方法默认使用js库里自带的
export const model = {
    // 保存code到数据库
    saveAuthorizationCode: (code: Pick<OAuth2.AuthorizationCode, 'authorizationCode' | 'expiresAt' | 'redirectUri' | 'scope'>, client: OAuth2.Client, user: OAuth2.User, callback?: OAuth2.Callback<OAuth2.AuthorizationCode>): Promise<false | '' | 0 | OAuth2.AuthorizationCode | null | undefined>  => {
        console.log('code=',code)
        return Promise.resolve('')
    },
    // 撤销code
    revokeAuthorizationCode: (code: OAuth2.AuthorizationCode, callback?: OAuth2.Callback<boolean>): Promise<boolean> => {
        return Promise.resolve(true)
    },
    // 获取授权码code
    getAuthorizationCode: (authorizationCode: string, callback?: OAuth2.Callback<OAuth2.AuthorizationCode>): Promise<false | '' | 0 | OAuth2.AuthorizationCode | null | undefined> => {
        return Promise.resolve('')
    }
}
export class Model implements AuthorizationCodeModel {
    getAuthorizationCode(authorizationCode: string, callback?: OAuth2.Callback<OAuth2.AuthorizationCode>): Promise<false | '' | 0 | OAuth2.AuthorizationCode | null | undefined> {
        return Promise.resolve('')
    }
    saveAuthorizationCode(code: Pick<OAuth2.AuthorizationCode, 'authorizationCode' | 'expiresAt' | 'redirectUri' | 'scope'>, client: OAuth2.Client, user: OAuth2.User, callback?: OAuth2.Callback<OAuth2.AuthorizationCode>): Promise<false | '' | 0 | OAuth2.AuthorizationCode | null | undefined> {
        return Promise.resolve('')
    }
    revokeAuthorizationCode(code: OAuth2.AuthorizationCode, callback?: OAuth2.Callback<boolean>): Promise<boolean> {
        return Promise.resolve(true)
    }
    getClient(clientId: string, clientSecret: string, callback?: OAuth2.Callback<false | '' | 0 | OAuth2.Client | null | undefined>): Promise<false | '' | 0 | OAuth2.Client | null | undefined> {
        return Promise.resolve('')
    }
    saveToken(token: OAuth2.Token, client: OAuth2.Client, user: OAuth2.User, callback?: OAuth2.Callback<OAuth2.Token>): Promise<false | '' | 0 | OAuth2.Token | null | undefined> {
        return Promise.resolve('')
    }
    getAccessToken(accessToken: string, callback?: OAuth2.Callback<OAuth2.Token>): Promise<false | '' | 0 | OAuth2.Token | null | undefined> {
        return Promise.resolve('')
    }
    verifyScope(token: OAuth2.Token, scope: string | string[], callback?: OAuth2.Callback<boolean>): Promise<boolean> {
        return Promise.resolve(true)
    }
}

