
const config = {
    serviceXUrl: 'google.com',
    env: process.env.NODE_ENV,
    port: process.env.NODE_PORT,
    dbUri: process.env.DB_URI,
    privateKey: process.env.PRIVATE_KEY
}

const permissions = {
    role: ['getRoles', 'getRole', 'saveRole', 'updateRole', 'deleteRole']
}

export const defaultRoles = {
    Client: [role[0], role[1]]
};

export default config;
