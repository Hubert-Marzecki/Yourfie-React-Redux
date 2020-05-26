import { createSlice, PayloadAction } from "@reduxjs/toolkit";


function initialStateArtist () {
    return {
        items: [
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/68kRG1Z7B5IXKaxne5Yto4'
                },
                followers: {
                    href: null,
                    total: 20516
                },
                genres: [
                    'antideutsche',
                    'german alternative rap',
                    'russian hardcore'
                ],
                href: 'https://api.spotify.com/v1/artists/68kRG1Z7B5IXKaxne5Yto4',
                id: '68kRG1Z7B5IXKaxne5Yto4',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/ab67616d0000b273b9ddf4fcaa80c012340c517b',
                        width: 640
                    },
                    {
                        height: 300,
                        url: 'https://i.scdn.co/image/ab67616d00001e02b9ddf4fcaa80c012340c517b',
                        width: 300
                    },
                    {
                        height: 64,
                        url: 'https://i.scdn.co/image/ab67616d00004851b9ddf4fcaa80c012340c517b',
                        width: 64
                    }
                ],
                name: 'Moscow Death Brigade',
                popularity: 43,
                type: 'artist',
                uri: 'spotify:artist:68kRG1Z7B5IXKaxne5Yto4'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/2UmG7WphL1CMN7mVWyhE7u'
                },
                followers: {
                    href: null,
                    total: 96128
                },
                genres: [
                    'australian garage punk',
                    'australian reggae fusion',
                    'indie garage rock',
                    'neo-psychedelic'
                ],
                href: 'https://api.spotify.com/v1/artists/2UmG7WphL1CMN7mVWyhE7u',
                id: '2UmG7WphL1CMN7mVWyhE7u',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/00dfb644a4af7acde4a1026110d1807816b36628',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/dcd72ccb121b8ffccddd8c209a8bb2b38fd7caf7',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/337e0f45695c80d695eb1341bec33fb1edb1321e',
                        width: 160
                    }
                ],
                name: 'Babe Rainbow',
                popularity: 56,
                type: 'artist',
                uri: 'spotify:artist:2UmG7WphL1CMN7mVWyhE7u'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/0hrb5WRiNlj8vh3WnCgXFq'
                },
                followers: {
                    href: null,
                    total: 108196
                },
                genres: [
                    'freak folk',
                    'instrumental stoner rock',
                    'japanese psychedelic',
                    'japanese psychedelic rock',
                    'neo-psychedelic'
                ],
                href: 'https://api.spotify.com/v1/artists/0hrb5WRiNlj8vh3WnCgXFq',
                id: '0hrb5WRiNlj8vh3WnCgXFq',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/1fd50a92bc58c8744dd15eaae64c0bb292a23639',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/f174aba4a776924a39a9e86f8b9a3bbaf8dc5812',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/11880ac6925b2338d7fff428e197faf6c5cb12db',
                        width: 160
                    }
                ],
                name: 'Kikagaku Moyo',
                popularity: 52,
                type: 'artist',
                uri: 'spotify:artist:0hrb5WRiNlj8vh3WnCgXFq'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/0N1jE1EIrhZjvQSfuLupUu'
                },
                followers: {
                    href: null,
                    total: 46633
                },
                genres: [
                    'atmospheric sludge',
                    'belgian metal',
                    'drone metal',
                    'post-doom metal',
                    'post-metal',
                    'post-rock',
                    'sludge metal'
                ],
                href: 'https://api.spotify.com/v1/artists/0N1jE1EIrhZjvQSfuLupUu',
                id: '0N1jE1EIrhZjvQSfuLupUu',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/315f98c3fdc74602b8602aa7897aad168f4d992c',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/a38a2cd27d791a6ff32213bc3177d48ef1adb917',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/44625e94e8bc3ea6a813d22383c263eb9c3b8dde',
                        width: 160
                    }
                ],
                name: 'Amenra',
                popularity: 40,
                type: 'artist',
                uri: 'spotify:artist:0N1jE1EIrhZjvQSfuLupUu'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/1X88xrhEvsoUjJ6EUHwiWF'
                },
                followers: {
                    href: null,
                    total: 66088
                },
                genres: [
                    'australian garage punk',
                    'garage rock',
                    'indie garage rock',
                    'neo-psychedelic'
                ],
                href: 'https://api.spotify.com/v1/artists/1X88xrhEvsoUjJ6EUHwiWF',
                id: '1X88xrhEvsoUjJ6EUHwiWF',
                images: [
                    {
                        height: 440,
                        url: 'https://i.scdn.co/image/9c548e0307c423d47a21f336cd6c12ac7e9c9695',
                        width: 660
                    },
                    {
                        height: 427,
                        url: 'https://i.scdn.co/image/10b713c454413fe5615a11458eadba33ab1c3116',
                        width: 640
                    },
                    {
                        height: 133,
                        url: 'https://i.scdn.co/image/b75353d8a3b44b43b4e4c29d72c81c92ddd8e73e',
                        width: 199
                    },
                    {
                        height: 43,
                        url: 'https://i.scdn.co/image/7059d4f1b0dc89ed819662d267318b29d0bb8c0e',
                        width: 64
                    }
                ],
                name: 'Fuzz',
                popularity: 46,
                type: 'artist',
                uri: 'spotify:artist:1X88xrhEvsoUjJ6EUHwiWF'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/1aQ7P3HtKOQFW16ebjiks1'
                },
                followers: {
                    href: null,
                    total: 97249
                },
                genres: [
                    'australian garage punk'
                ],
                href: 'https://api.spotify.com/v1/artists/1aQ7P3HtKOQFW16ebjiks1',
                id: '1aQ7P3HtKOQFW16ebjiks1',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/dadf54b43528a27b89dc0a5d3b4a9007af935380',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/7ca7d9bb75fa47637a1bbf7617e5ffb8508da944',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/155dd9f8975dc354063529be2e653cbb953b152c',
                        width: 160
                    }
                ],
                name: 'The Chats',
                popularity: 57,
                type: 'artist',
                uri: 'spotify:artist:1aQ7P3HtKOQFW16ebjiks1'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/3qYfqdVwX0fil71onLpLkh'
                },
                followers: {
                    href: null,
                    total: 202786
                },
                genres: [
                    'alternative rock',
                    'australian garage punk',
                    'bay area indie',
                    'dance-punk',
                    'freak folk',
                    'garage pop',
                    'garage psych',
                    'garage rock',
                    'indie garage rock',
                    'indie rock',
                    'neo-psychedelic',
                    'noise pop',
                    'noise rock',
                    'nu gaze',
                    'psychedelic punk',
                    'punk blues'
                ],
                href: 'https://api.spotify.com/v1/artists/3qYfqdVwX0fil71onLpLkh',
                id: '3qYfqdVwX0fil71onLpLkh',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/5aa0ad0d4610d25d0fd715341de4dadbfec14265',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/d47c0b9dcd90e2221fce2d21ec3a9c86fb749180',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/4100ef81fd10f34327c810e76b07cbdb35d93f16',
                        width: 160
                    }
                ],
                name: 'Thee Oh Sees',
                popularity: 55,
                type: 'artist',
                uri: 'spotify:artist:3qYfqdVwX0fil71onLpLkh'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/4kSGbjWGxTchKpIxXPJv0B'
                },
                followers: {
                    href: null,
                    total: 215946
                },
                genres: [
                    'indie garage rock',
                    'neo-psychedelic'
                ],
                href: 'https://api.spotify.com/v1/artists/4kSGbjWGxTchKpIxXPJv0B',
                id: '4kSGbjWGxTchKpIxXPJv0B',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/f70c7ab74ab6fc16db4d0b959d1788708dddb6d5',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/519f3363e78956d993204662ce4561da56e0fb1e',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/ce91d71ba7022e0330a2b1ae7d4eeb5b5ec0ad9b',
                        width: 160
                    }
                ],
                name: 'Crumb',
                popularity: 64,
                type: 'artist',
                uri: 'spotify:artist:4kSGbjWGxTchKpIxXPJv0B'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/4skJp5OKvcc9eKokiuhi2s'
                },
                followers: {
                    href: null,
                    total: 216000
                },
                genres: [
                    'indie rock',
                    'indietronica',
                    'neo-psychedelic'
                ],
                href: 'https://api.spotify.com/v1/artists/4skJp5OKvcc9eKokiuhi2s',
                id: '4skJp5OKvcc9eKokiuhi2s',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/ccb6ec5f76521d21b36d69d328fb65a8e588bc16',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/2dabbeb7cd38a9fa1ada4898cc0c067061ce0af8',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/0b71d7839f5684a44ba780eda064f8b2465e0bdf',
                        width: 160
                    }
                ],
                name: 'Pond',
                popularity: 58,
                type: 'artist',
                uri: 'spotify:artist:4skJp5OKvcc9eKokiuhi2s'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/58XGUNsRNu3cVOIOYk5chx'
                },
                followers: {
                    href: null,
                    total: 231433
                },
                genres: [
                    'alternative rock',
                    'australian garage punk',
                    'bay area indie',
                    'blues rock',
                    'freak folk',
                    'garage pop',
                    'garage psych',
                    'garage rock',
                    'indie garage rock',
                    'indie punk',
                    'indie rock',
                    'lo-fi',
                    'neo-psychedelic',
                    'noise pop',
                    'nu gaze',
                    'punk blues'
                ],
                href: 'https://api.spotify.com/v1/artists/58XGUNsRNu3cVOIOYk5chx',
                id: '58XGUNsRNu3cVOIOYk5chx',
                images: [
                    {
                        height: 1000,
                        url: 'https://i.scdn.co/image/1142d182b872ea0a4a8088881de6d4a2258d3f78',
                        width: 1000
                    },
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/611fc7480d4c49b40224095e695c5f67630757e4',
                        width: 640
                    },
                    {
                        height: 200,
                        url: 'https://i.scdn.co/image/228e1aee01bb3573f75f8c112ca8f048c031e376',
                        width: 200
                    },
                    {
                        height: 64,
                        url: 'https://i.scdn.co/image/0ae37df0b0d7f18a4bf6b9182b45ff2259250dde',
                        width: 64
                    }
                ],
                name: 'Ty Segall',
                popularity: 57,
                type: 'artist',
                uri: 'spotify:artist:58XGUNsRNu3cVOIOYk5chx'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/7GRrLcUxwtQLvOpO7OHO80'
                },
                followers: {
                    href: null,
                    total: 111757
                },
                genres: [
                    'australian garage punk',
                    'australian psych',
                    'neo-psychedelic'
                ],
                href: 'https://api.spotify.com/v1/artists/7GRrLcUxwtQLvOpO7OHO80',
                id: '7GRrLcUxwtQLvOpO7OHO80',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/1551c42ba5ae7ff9c6292c2be86571140c771195',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/a30b001d8f7626d00ed63a660a8f1350ed073019',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/04b27bd2bde02343bb7e33593899d1bed4bc3674',
                        width: 160
                    }
                ],
                name: 'Psychedelic Porn Crumpets',
                popularity: 53,
                type: 'artist',
                uri: 'spotify:artist:7GRrLcUxwtQLvOpO7OHO80'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/3IYUhFvPQItj6xySrBmZkd'
                },
                followers: {
                    href: null,
                    total: 3434956
                },
                genres: [
                    'album rock',
                    'classic rock',
                    'country rock',
                    'rock',
                    'roots rock',
                    'southern rock'
                ],
                href: 'https://api.spotify.com/v1/artists/3IYUhFvPQItj6xySrBmZkd',
                id: '3IYUhFvPQItj6xySrBmZkd',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/a02c89d6abef58ad10832020c06f6a8a38dd9a32',
                        width: 640
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/749a67d2dd3ab8413d4119c63dd69afa6c43bb47',
                        width: 320
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/541309c5984f2a527f337a2b5759eab31774190d',
                        width: 160
                    }
                ],
                name: 'Creedence Clearwater Revival',
                popularity: 80,
                type: 'artist',
                uri: 'spotify:artist:3IYUhFvPQItj6xySrBmZkd'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp'
                },
                followers: {
                    href: null,
                    total: 8910278
                },
                genres: [
                    'album rock',
                    'classic rock',
                    'hard rock',
                    'rock'
                ],
                href: 'https://api.spotify.com/v1/artists/36QJpDe2go2KgaRleHCDTp',
                id: '36QJpDe2go2KgaRleHCDTp',
                images: [
                    {
                        height: 600,
                        url: 'https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e',
                        width: 600
                    },
                    {
                        height: 200,
                        url: 'https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8',
                        width: 200
                    },
                    {
                        height: 64,
                        url: 'https://i.scdn.co/image/16eb3cdae0d824b520ac17710e943a99d3ef6602',
                        width: 64
                    }
                ],
                name: 'Led Zeppelin',
                popularity: 81,
                type: 'artist',
                uri: 'spotify:artist:36QJpDe2go2KgaRleHCDTp'
            },
            {
                external_urls: {
                    spotify: 'https://open.spotify.com/artist/3ICflSq6ZgYAIrm2CTkfVP'
                },
                followers: {
                    href: null,
                    total: 1415059
                },
                genres: [
                    'album rock',
                    'blues rock',
                    'british invasion',
                    'classic rock',
                    'folk rock',
                    'hard rock',
                    'protopunk',
                    'psychedelic rock',
                    'rock',
                    'rock-and-roll'
                ],
                href: 'https://api.spotify.com/v1/artists/3ICflSq6ZgYAIrm2CTkfVP',
                id: '3ICflSq6ZgYAIrm2CTkfVP',
                images: [
                    {
                        height: 1014,
                        url: 'https://i.scdn.co/image/7c1a0a0a745e44fc0775a3e82c10eb53ceb072ee',
                        width: 1000
                    },
                    {
                        height: 649,
                        url: 'https://i.scdn.co/image/b68f1f5e71a2af8bfff491edd53ab134422586ce',
                        width: 640
                    },
                    {
                        height: 203,
                        url: 'https://i.scdn.co/image/e3aae0f9324b748c68e0be8ac4a09978635e2cf6',
                        width: 200
                    },
                    {
                        height: 65,
                        url: 'https://i.scdn.co/image/d5fa7431fc1838c19a5eb145c95314694aea455d',
                        width: 64
                    }
                ],
                name: 'The Animals',
                popularity: 68,
                type: 'artist',
                uri: 'spotify:artist:3ICflSq6ZgYAIrm2CTkfVP'
            }
        ],
        total: 17,
        limit: 20,
        offset: 0,
        previous: null,
        href: 'https://api.spotify.com/v1/me/top/artists',
        next: null
    }
}

export const topArtists = createSlice({
    name: "topArtists",
    initialState: [],
    reducers:{
        setTopArtists: ( state:any, action) => action.payload
    }
})

export const setTopArtists = (state:any) => state.topArtists;
export default topArtists;
