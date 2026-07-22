class Twitter {
    constructor() {
        this.users = new Map()
        this.follows = new Map()
        this.time = 0
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, new MaxPriorityQueue(x => x[0]))
        }
        this.users.get(userId).enqueue([this.time++, tweetId])
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let relevantUsers = new Set([userId])
        let newsFeed = new MaxPriorityQueue(x => x[0])

        if (this.follows.has(userId)) {
            for (const followeeId of this.follows.get(userId)) {
                relevantUsers.add(followeeId)
            }
        }

        for (const user of relevantUsers) {
            if (!this.users.has(user)) {
                continue
            }

            let mostRecent = []
            let size = this.users.get(user).size()
            for (let i = 0; i < size; i++) {
                let top = this.users.get(user).dequeue()
                mostRecent.push(top)
                newsFeed.enqueue(top)
            }

            for (const item of mostRecent) {
                this.users.get(user).enqueue(item)
            }
        }
        
        let mostRecent = []
        let feedSize = newsFeed.size()
        for (let i = 0; i < Math.min(feedSize, 10); i++) {
            mostRecent.push(newsFeed.dequeue())
        }

        return mostRecent.map(x => x[1])
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.follows.has(followerId)) {
            this.follows.set(followerId, new Set())
        }
        this.follows.get(followerId).add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.follows.get(followerId).delete(followeeId)
    }
}
