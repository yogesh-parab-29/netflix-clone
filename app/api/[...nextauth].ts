import NextAuth from "next-auth/next";


export default NextAuth(){
    providers:[
        Credentials({
            id:'credentials',
name: 'Credentials',

        })
    ]
}