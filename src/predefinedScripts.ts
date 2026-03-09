import Role from './types/role';
import {type Section, SectionType} from './types/section';


const predefinedScripts: Section[] = [
    {
        type: SectionType.Greeting,
        script: [
            {role: Role.Celebrant, text: '因父、及子、及聖神之名。'},
            {role: Role.Faithful, text: 'Amen。'},
            {role: Role.Celebrant, text: '願天父的慈愛，基督的聖寵，聖神的恩賜與你們同在。'},
            {role: Role.Faithful, text: '也與你的心靈同在。'},
        ],
    },
    {
        type: SectionType.PenitentialAct,
        script: [
            {role: Role.Celebrant, text: '各位教友，現在我們大家認罪，虔誠地舉行聖祭。'},
            {role: Role.All, text: '我向全能的天主和各位教友，承認我思、言、行為上的過失。我罪，我罪，我的重罪。為此，懇請終身童貞聖母瑪利亞、天使、聖人、和你們各位教友，為我祈求上主、我們的天主。'},
            {role: Role.Celebrant, text: '願全能的天主垂憐我們，赦免我們的罪，使我們得到永生。'},
            {role: Role.All, text: 'Amen。'},
        ],
    },
    {
        type: SectionType.Kyrie,
        script: [
            {role: Role.Celebrant, text: '上主，求你垂憐。'},
            {role: Role.Faithful, text: '上主，求你垂憐。'},
            {role: Role.Celebrant, text: '基督，求你垂憐。'},
            {role: Role.Faithful, text: '基督，求你垂憐。'},
            {role: Role.Celebrant, text: '上主，求你垂憐。'},
            {role: Role.Faithful, text: '上主，求你垂憐。'},
        ],
    },
    {
        type: SectionType.Gloria,
        script: [
            {role: Role.All, text: '天主在天受光榮，主愛的人在世享平安。主、天主、天上的君王、全能的天主聖父，我們為了你無上的光榮，讚美你、稱頌你、朝拜你、顯揚你、感謝你。主、耶穌基督、獨生子；主、天主、天主的羔羊，聖父之子；除免世罪者，求你垂憐我們。除免世罪者，求你俯聽我們的祈禱。坐在聖父之右者，求你垂憐我們；因為只有你是聖的，只有你是主，只有你是至高無上的。耶穌基督，你和聖神，同享天主聖父的光榮，Amen。'},
        ],
    },
    {
        type: SectionType.BeforeGospel,
        script: [
            {role: Role.Celebrant, text: '願主與你們同在。'},
            {role: Role.Faithful, text: '也與你的心靈同在。'},
        ],
    },
    {
        type: SectionType.Creed,
        script: [
            {role: Role.All, text: '我信唯一的天主，全能的聖父，天地萬物，無論有形無形，都是祂所創造的。我信唯一的主，耶穌基督，天主的獨生子。祂在萬世之前，由聖父所生。祂是出自天主的天主，出自光明的光明，出自真天主的真天主。祂是聖父所生，而非聖父所造，與聖父同性同體，萬物是藉著祂而造成的。祂為了我們人類，並為了我們的得救，從天降下。祂因聖神由童貞瑪利亞取得肉軀，而成為人。祂在般雀比拉多執政時，為我們被釘在十字架上，受難而被埋葬。祂正如聖經所載，第三日復活了，祂升了天，坐在聖父的右邊。祂還要光榮地降來，審判生者死者，祂的神國萬世無疆。我信聖神，祂是主及賦予生命者，由聖父聖子所共發。祂和聖父聖子，同受欽崇，同享光榮，祂曾藉先知們發言。我信唯一、至聖、至公、從宗徒傳下來的教會。我承認赦罪的聖洗，只有一個。我期待死人的復活，及來世的生命，Amen。'},
        ],
    },
    {
        type: SectionType.EucharisticLiturgy,
        script: [
            {role: Role.Celebrant, text: '上主，萬有的天主，你賜給我們食糧，我們讚美你；我們將大地和人類勞苦的果實─麥麵餅，呈獻給你，使成為我們的生命之糧。'},
            {role: Role.Faithful, text: '願天主永受讚美。'},
            {role: Role.Celebrant, text: '酒水的攙合，象徵天主取了我們的人性，願我們也分享基督的天主性。上主，萬有的天主，你賜給我們飲料，我們讚美你；我們將葡萄樹和人類勞苦的果實─葡萄酒，呈獻給你，使成為我們的精神飲料。'},
            {role: Role.Faithful, text: '願天主永受讚美。'},
            {role: Role.Celebrant, text: '上主，我們懷著謙遜和痛悔的心情，今天在你面前，舉行祭祀，求你悅納。上主，求你洗淨我的罪污，滌除我的愆尤。各位教友，請你們祈禱，望全能的天主聖父，收納我和你們共同奉獻的聖祭。'},
            {role: Role.Faithful, text: '望上主從你的手中，收納這個聖祭，為讚美並光榮祂的聖名，也為我們和祂整個聖教會的益處。'},
        ],
    },
    {
        type: SectionType.PrefaceOpening,
        script: [
            {role: Role.Celebrant, text: '願主與你們同在。'},
            {role: Role.Faithful, text: '也與你的心靈同在。'},
            {role: Role.Celebrant, text: '請舉心向上。'},
            {role: Role.Faithful, text: '我們全心歸向上主。'},
            {role: Role.Celebrant, text: '請大家感謝主、我們的天主。'},
            {role: Role.Faithful, text: '這是理所當然的。'},
        ],
    },
    {
        type: SectionType.Preface,
        script: [
            {role: Role.Celebrant, text: '主、聖父，全能永生的天主，我們藉著主基督，時時處處感謝你，實在是理所當然的，並有助我們獲得救恩。為此，我們隨同所有天使和聖人，一起歌頌你，不停地歡呼：'},
        ],
    },
    {
        type: SectionType.PrefaceEnding,
        script: [
            {role: Role.All, text: '聖、聖、聖，上主，萬有的天主，你的光榮充滿天地。歡呼之聲，響徹雲霄。奉上主名而來的，當受讚美。歡呼之聲，響徹雲霄。'},
        ],
    },
    {
        type: SectionType.EucharisticPrayer,
        script: [
            {role: Role.Celebrant, text: '上主，你實在是神聖的，你是一切聖德的根源。因此，我們懇求你派遣聖神，聖化這些禮品，使成為我們的主耶穌基督的聖體和聖血。'},
        ],
    },
    {
        type: SectionType.Consecration,
        script: [
            {role: Role.Celebrant, text: '祂甘願捨身受難時，拿起麵餅，感謝了，分開，交給祂的門徒說：『你們大家拿去吃：這就是我的身體，將為你們而犧牲。』晚餐後，祂同樣拿起杯來，又感謝了，交給祂的門徒說：『你們大家拿去喝：這一杯就是我的血，新而永久的盟約之血，將為你們和眾人傾流，以赦免罪惡。你們要這樣做，來紀念我。』'},
        ],
    },
    {
        type: SectionType.MemorialAcclamation,
        script: [
            {role: Role.Celebrant, text: '信德的奧蹟。'},
            {role: Role.Faithful, text: '基督，我們傳報你的聖死，我們歌頌你的復活，我們期待你光榮的來臨。'},
            {role: Role.Celebrant, text: '上主，因此我們紀念基督的聖死與復活，向你奉獻生命之糧、救恩之杯，感謝你使我們得在你台前侍奉你。我們懇求你，使我們分享基督的聖體聖血，並因聖神合而為一。上主，求你垂念普世的教會，使你的子民偕同我們的教宗、我們的主教與所有的主教，以及全體聖職人員、都在愛德中日趨完善。求你也垂念懷著復活的希望而安息的兄弟姊妹；並求你垂念我們的祖先和所有去世的人，使他們享見你光輝的聖容。求你垂念我們眾人，使我們得與天主之母童貞榮福瑪利亞、諸聖宗徒，以及你所喜愛的歷代聖人聖女，共享永生；並使我們藉你的聖子耶穌基督，讚美你、顯揚你。全能的天主聖父，一切崇敬和榮耀，藉著基督，偕同基督，在基督內，並聯合聖神，都歸於你，直到永遠。'},
            {role: Role.Faithful, text: 'Amen。'},
        ],
    },
    {
        type: SectionType.CommunionRite,
        script: [
            {role: Role.Celebrant, text: '我們既遵從救主的訓示，又承受祂的教導，才敢說：'},
            {role: Role.All, text: '我們的天父，願你的名受顯揚；願你的國來臨；願你的旨意奉行在人間，如同在天上。求你今天賞給我們日用的食糧；求你寬恕我們的罪過，如同我們寬恕別人一樣；不要讓我們陷於誘惑，但救我們免於凶惡。'},
            {role: Role.Celebrant, text: '上主，求你從一切災禍中拯救我們，恩賜我們的時代得享平安；更求你大發慈悲，保祐我們脫免罪惡，並在一切困擾中，獲得安全，使我們虔誠期待永生的幸福，和救主耶穌的來臨。'},
            {role: Role.Faithful, text: '天下萬國，普世權威，一切榮耀，永歸於你。'},
            {role: Role.Celebrant, text: '主耶穌基督，你曾對宗徒們說：「我將平安留給你們，將我的平安賞給你們。」求你不要看我們的罪過，但看你教會的信德，並按照你的聖意，使教會安定團結，你是天主，永生永王。'},
            {role: Role.Faithful, text: 'Amen。'},
            {role: Role.Celebrant, text: '願主的平安常與你們同在。'},
            {role: Role.Faithful, text: '也與你的心靈同在。'},
            {role: Role.Celebrant, text: '請大家互祝平安。'},
            {role: Role.All, text: '除免世罪的天主羔羊，求你垂憐我們。除免世罪的天主羔羊，求你垂憐我們。除免世罪的天主羔羊，求你賜給我們平安。'},
            {role: Role.Celebrant, text: '請看，天主的羔羊；請看，除免世罪者。蒙召來赴聖宴的人，是有福的。'},
            {role: Role.All, text: '主，我當不起你到我的心裏來，只要你說一句話，我的靈魂就會痊癒。'},
        ],
    },
    {
        type: SectionType.Blessing,
        script: [
            {role: Role.Celebrant, text: '願主與你們同在。'},
            {role: Role.Faithful, text: '也與你的心靈同在。'},
            {role: Role.Celebrant, text: '願全能的天主，聖父、聖子、聖神，降福你們。'},
            {role: Role.Faithful, text: 'Amen。'},
        ],
    },
    {
        type: SectionType.Dismissal,
        script: [
            {role: Role.Celebrant, text: '彌撒禮成。'},
            {role: Role.Faithful, text: '感謝天主。'},
        ],
    },
    {
        type: SectionType.Recessional,
        script: [
            {role: Role.Celebrant, text: '萬福瑪麗亞，'},
            {role: Role.Faithful, text: '妳充滿聖寵。主與妳同在。妳在婦女中受讚頌，妳的親子耶穌同受讚頌。天主聖母瑪利亞，求妳現在和我們臨終時，為我們罪人祈求天主。Amen。'},
        ],
    },
];

export default predefinedScripts;
