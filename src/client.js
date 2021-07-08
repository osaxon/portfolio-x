import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "wskvlsm9",
    dataset: "production",
    apiVersion: '2021-07-05',
    // useCdn: true,
})