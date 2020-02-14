export default {
    KEY: 'NoteAppData',
    getData() {
        return JSON.parse(window.localStorage.getItem(this.KEY)) || [];
    },
    saveData(data){
        window.localStorage.setItem(this.KEY, JSON.stringify(data));
    }
};
