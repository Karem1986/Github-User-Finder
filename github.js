//Create the class for calling this data AND Instantiate it on app.js too!!1
class Github {
    constructor() {
        this.client_id = '62498d1b168f2ac14d5d';
        this.client_secret = 'f5edf26ae0a4bb825cdc064a995cfaa85785fd94';
        this.repos_count = 5;
        this.repos_sort ='created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}