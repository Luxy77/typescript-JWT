import jwt from 'jsonwebtoken'


const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQC4Ki9LkB+pt9arZ9u49KgFNhCnUIhxfLUe0ConFSfkJN9Q5HBB
5wzosAaBYpqlpycuBAg7qmGY73ssxhOHzijAgKjhCBATNvlrTZv9xXJ7DcV+GdaM
74Y3fDUQK+lTeD4ddJmSBKok4kvgM9NgjLTjdOqlfmcjSdQudaApRz0YYwIDAQAB
AoGBALWDFmRCY4KyJ8l+rqfnsuaX9+gATsqT4CvDfZhRmKSa1uNyk1XQ9P8t5uuF
FOjqC4ql/LtZ3aGPf3aMr1ktjykoNwKSvX8PzY26ke17xpYnieDhoXVj4mfLRp5q
RfAy4oGbOrg9UngQBgrCO5atvRX8zbdFRcESzGfPdFhL4KzBAkEA30zF+hfi+ncE
0HKkFi66yCl+S7yFKdHIFsmmTbjxZQ8qUgpsddtfQ/b6yc1UUToBgHpadmcCOlIk
OpIJdyqLQwJBANMiSUiBvySeyYXWqAUd7QJG8RFOPhRojTF/vxMqK7gi3R++c1ZF
z7oS+9ZYt9hNyyOA9VhhMD3gXRJZBPHhHGECQFIUjGljwmFCwphEq6AjyTCuX+hD
AcfffucxdFn5c3IsYugJQNkJrDj1XjYzrZy177tkPkBrmNwLOZn1+Fi/YLUCQQCY
TrqI6LgnxbhgqVop3s2z/9M1hbj45fc9Bwei3qANRHE5zhzL1q6kb79mgDeXfX8W
TJgwumOfr3PUoY0UpCzhAkEAs94JrajKV98PE2oI5cwl0y554PJp2CHab6Nx+Vmt
pkkPirIqHshyIS4rrT/JJ2hXWhBoKSji+W8aGM4BSLL7jw==
-----END RSA PRIVATE KEY-----`

const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4Ki9LkB+pt9arZ9u49KgFNhCn
UIhxfLUe0ConFSfkJN9Q5HBB5wzosAaBYpqlpycuBAg7qmGY73ssxhOHzijAgKjh
CBATNvlrTZv9xXJ7DcV+GdaM74Y3fDUQK+lTeD4ddJmSBKok4kvgM9NgjLTjdOql
fmcjSdQudaApRz0YYwIDAQAB
-----END PUBLIC KEY-----`

export function signJWT(payload: object, expiresIn: string | number) {
    return jwt.sign(payload, PRIVATE_KEY, { algorithm: "RS256", expiresIn });
}

export function verifyJWT(token: string) {
    try {
        const decoded = jwt.verify(token, PUBLIC_KEY);
        return { payload: decoded, expired: false };
    } catch (error) {
        return { payload: null, expired: true };
    }
    }