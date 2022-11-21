export class SongNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class PlayList{
    constructor(){
        this.head = null;
    }

    addToPlaylist(arr){
        let trigger = false
        if(!this.head){
            const newNode = new SongNode(arr[0]);
            this.head = newNode;
            trigger = true;
        }
        let runner = this.head;
        if(this.head.next){
            while(runner.next){
                runner = runner.next
            }
        }
        for(let i = trigger? 1:0; i< arr.length; i++){
            const newNode = new SongNode(arr[i]);
            runner.next = newNode;
            runner = runner.next;
        }
    }

    displayAllSongs(){
        if(!this.head){
            return "the playlist is empty";
        }
        let output = "";
        let runner = this.head;
        while(runner){
            const {title, artist, duration} = runner.data
            output += "---------------------------\n";
            output += `Title: ${title}\n`;
            output += `Artist: ${artist}\n`;
            output += `Duration: ${duration}\n`;
            output += "---------------------------\n";
            runner = runner.next;
        }
        return output;
    }

    removeSongByTitle(titleToRemove){
        if(!this.head){
            return "this is empty"
        }
        let runner = this.head;
        while(runner){
            const {title} = runner.next.data;
            if(titleToRemove === title){
                break
            }
            runner = runner.next;
        }
        let removedNode = runner.next;
        runner.next = runner.next.next;
        removedNode.next = null;
    }

    totalPlaylistRuntime(){
        if(!this.head){
            return "this is empty"
        }
        let runner = this.head;
        let totalSeconds = 0, output = 0
        while(runner){
            const {duration} = runner.data;
            const minAndSeconds = duration.split(":");
            const minToSeconds = parseInt(minAndSeconds[0]) * 60;
            totalSeconds += minToSeconds + parseInt(minAndSeconds[1])
            runner = runner.next
        }
        const minute = Math.floor(totalSeconds / 60);
        output += minute+":"+totalSeconds%60
        return output.slice(1);
    }
}