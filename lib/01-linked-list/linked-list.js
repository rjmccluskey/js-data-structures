class LinkedList {
    get head() {
        return this._head;
    }

    constructor(...items) {
        items.forEach(item => this.add(item));
    }

    add(data) {
        this._head = { data: data, next: this.head };
    }

    pop() {
        if (!this.head) return;
        const data = this.head.data;
        this._head = this.head.next;
        return data;
    }

    peak() {
        if (!this.head) return;
        return this.head.data;
    }

    indexOf(value) {
        let currentIndex = 0;
        let last = this.head;
        while (last) {
            if (last.data === value) return currentIndex;
            last = last.next;
            currentIndex++;
        }
        return -1;
    }

    forEach(callback) {
        let last = this.head;
        while (last) {
            callback(last.data);
            last = last.next;
        }
    }
}

module.exports = LinkedList;