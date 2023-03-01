// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202020201020202010102020102020101010101010202020101020202020202020202020202020201010101010101020201020201010101010102020202010202010202010202020101020102020102020102020102020201010201020202020201020201020202010102010202020202020202020202020101020101010101010202010101010101010202020202020202020102020202010102020202020202020201020202020101010101010101010202010101020201010202020202020102020202020202010102020202020201020202020202020101010101010101010303010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . 2 . . 2 2 2 2 2 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . 2 . . 2 2 2 2 2 
2 . . . . 2 . . 2 . . 2 . . . 2 
2 . 2 . . 2 . . 2 . . 2 . . . 2 
2 . 2 . . . . . 2 . . 2 . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 . . 2 2 2 2 2 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 . . 2 2 2 . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.darkGroundCenter,sprites.skillmap.islandTile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
