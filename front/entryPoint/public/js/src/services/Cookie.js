export class Cookie {
    constructor() { }

    get(key) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" +
            encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) ||
            null;
    }

    set(key, value, end, path, domain, secure) {
        if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
            return false;
        }
        var sExpires = "";

        if (end) {
            sExpires = "; expires=" + end;
        }
        
        document.cookie = encodeURIComponent(key) + "=" +
            encodeURIComponent(value) +
            sExpires + (domain ? "; domain=" + domain : "") +
            (path ? "; path=" + path : "") +
            (secure ? "; secure" : "");
        return true;
    }

    getAll(){
        return document.cookie
    }
}