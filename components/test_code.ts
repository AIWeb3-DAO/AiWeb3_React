
//34.83.125.53
const ipBackend = "34.83.125.53"
export const getUserAllImg = async () => {
    const getUserImgsUrl = "http://"+ipBackend+":1985/getUserAllImg"
    const data = JSON.stringify(
        {
            "accountType": "ethereum",
            "userAddress": "0x123"
        }
    )
    const response = await fetch(getUserImgsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    })
    const result = await response.json()

    console.log("getUserAllImg results ", result)
}


export const mintNFTwithCode = async () => {
    const getUserImgsUrl = "http://"+ipBackend+":1985/mintNFTwithCode"
    const data = JSON.stringify(
        {
            "accountType": "ethereum",
            "userAddress": "0x123",
            "NFTCode": "abcd",
            "feature":"red hat girl"
        }
    )
    const response = await fetch(getUserImgsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    })
    const result = await response.json()

    console.log("mintNFTwithCode ", result)
}

export const createUserProfile = async () => {
    const getUserImgsUrl = "http://"+ipBackend+":1985/createUserProfile"
    const data = JSON.stringify(
        {
            "accountType": "ethereum",
            "userAddress": "0x123"
        }
    )
    const response = await fetch(getUserImgsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    })
    const result = await response.json()

    console.log("createUserProfile results ", result)
}