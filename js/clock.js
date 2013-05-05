var cb = {
    w: [[3,0,2],[3,7,10],[9,8,10]],
    m: [[0,7,10],[1,0,3],[2,4,10],[1,4,10],[4,0,3]],
    h: [[8,6,10],[5,0,3],[5,7,10],[6,0,3],[6,7,10],[4,7,10],[7,0,4],[8,0,5],[7,7,10],[9,3,6],[9,0,3],[4,5,7]]
}
function clock() {
    setTimeout(clock, 10000);
    $("#clockboard td").removeClass("active");
    var words = [[0,0,1], [0,3,5]];
    var dt = new Date();
    var mins = dt.getMinutes();
    if(mins<=2) { words.push(cb.w[2]) }
    else if(mins<=7) { words.push(cb.m[0], cb.w[1]) }
    else if(mins<=12) { words.push(cb.m[1], cb.w[1]) }
    else if(mins<=17) { words.push(cb.m[2], cb.w[1]) }
    else if(mins<=22) { words.push(cb.m[3], cb.w[1]) }
    else if(mins<=27) { words.push(cb.m[0], cb.w[0], cb.m[4]) }
    else if(mins<=32) { words.push(cb.m[4]) }
    else if(mins<=37) { words.push(cb.m[0], cb.w[1], cb.m[4]) }
    else if(mins<=42) { words.push(cb.m[3], cb.w[0]) }
    else if(mins<=47) { words.push(cb.m[2], cb.w[0]) }
    else if(mins<=52) { words.push(cb.m[1], cb.w[0]) }
    else if(mins<=57) { words.push(cb.m[0], cb.w[0]) }
    else { words.push(cb.w[2]) }
    var h = mins<=22 ? dt.getHours()%12 : dt.getHours()%12+1;
    if(h==1 && (mins<=2||mins>57)) { words.push([5,0,2]) }
    else { words.push(cb.h[h]) }
    for(w in words) {
        var cell = words[w];
        $("#clockboard td").slice(cell[0]*11+cell[1], cell[0]*11+cell[2]+1).addClass("active");
    }
}