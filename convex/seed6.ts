import { mutation } from "./_generated/server";

function slug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const NEW_PRAYERS = [
  {
    title: "Litany of Humility",
    category: "Litanies",
    origin: "Attributed to Cardinal Merry del Val (1865–1930)",
    text: `<p>O Jesus! meek and humble of heart, hear me.</p>
<p>From the desire of being esteemed, <em>deliver me, Jesus.</em><br/>
From the desire of being loved, <em>deliver me, Jesus.</em><br/>
From the desire of being extolled, <em>deliver me, Jesus.</em><br/>
From the desire of being honored, <em>deliver me, Jesus.</em><br/>
From the desire of being praised, <em>deliver me, Jesus.</em><br/>
From the desire of being preferred to others, <em>deliver me, Jesus.</em><br/>
From the desire of being consulted, <em>deliver me, Jesus.</em><br/>
From the desire of being approved, <em>deliver me, Jesus.</em></p>
<p>From the fear of being humiliated, <em>deliver me, Jesus.</em><br/>
From the fear of being despised, <em>deliver me, Jesus.</em><br/>
From the fear of suffering rebukes, <em>deliver me, Jesus.</em><br/>
From the fear of being calumniated, <em>deliver me, Jesus.</em><br/>
From the fear of being forgotten, <em>deliver me, Jesus.</em><br/>
From the fear of being ridiculed, <em>deliver me, Jesus.</em><br/>
From the fear of being wronged, <em>deliver me, Jesus.</em><br/>
From the fear of being suspected, <em>deliver me, Jesus.</em></p>
<p>That others may be loved more than I, <em>Jesus, grant me the grace to desire it.</em><br/>
That others may be esteemed more than I, <em>Jesus, grant me the grace to desire it.</em><br/>
That, in the opinion of the world, others may increase and I may decrease, <em>Jesus, grant me the grace to desire it.</em><br/>
That others may be chosen and I set aside, <em>Jesus, grant me the grace to desire it.</em><br/>
That others may be praised and I unnoticed, <em>Jesus, grant me the grace to desire it.</em><br/>
That others may be preferred to me in everything, <em>Jesus, grant me the grace to desire it.</em><br/>
That others may become holier than I, provided that I may become as holy as I should, <em>Jesus, grant me the grace to desire it.</em></p>
<p>Amen.</p>`,
    notes: "A prayer attributed to Cardinal Rafael Merry del Val, Secretary of State under Pope St. Pius X. It is one of the most powerful prayers for the virtue of humility in the Catholic tradition.",
    sortOrder: 50,
  },
  {
    title: "Prayer of Abandonment",
    category: "Devotions",
    origin: "Saint Charles de Foucauld (1858–1916)",
    text: `<p>Father, I abandon myself into your hands;<br/>
do with me what you will.<br/>
Whatever you may do, I thank you:<br/>
I am ready for all, I accept all.</p>
<p>Let only your will be done in me,<br/>
and in all your creatures—<br/>
I wish no more than this, O Lord.</p>
<p>Into your hands I commend my soul:<br/>
I offer it to you with all the love of my heart,<br/>
for I love you, Lord,<br/>
and so need to give myself,<br/>
to surrender myself into your hands without reserve,<br/>
and with boundless confidence,<br/>
for you are my Father.</p>
<p>Amen.</p>`,
    notes: "Composed by Blessed Charles de Foucauld, a French soldier who became a hermit and priest in the Sahara. He was beatified in 2005 and canonized in 2022. This prayer is among the most beloved expressions of Christian surrender in modern spirituality.",
    sortOrder: 51,
  },
  {
    title: "Breastplate of Saint Patrick",
    category: "Devotions",
    origin: "Attributed to Saint Patrick (c. 385–461)",
    text: `<p>I bind unto myself today<br/>
the strong Name of the Trinity,<br/>
by invocation of the same,<br/>
the Three in One, and One in Three.</p>
<p>I bind this day to me forever,<br/>
by power of faith, Christ's Incarnation;<br/>
His baptism in the Jordan River;<br/>
His death on Cross for my salvation;<br/>
His bursting from the spicèd tomb;<br/>
His riding up the heavenly way;<br/>
His coming at the day of doom:<br/>
I bind unto myself today.</p>
<p>I bind unto myself today<br/>
the virtues of the starlit heaven,<br/>
the glorious sun's life-giving ray,<br/>
the whiteness of the moon at even,<br/>
the flashing of the lightning free,<br/>
the whirling wind's tempestuous shocks,<br/>
the stable earth, the deep salt sea,<br/>
around the old eternal rocks.</p>
<p>I bind unto myself today<br/>
the power of God to hold and lead,<br/>
His eye to watch, His might to stay,<br/>
His ear to hearken to my need;<br/>
the wisdom of my God to teach,<br/>
His hand to guide, His shield to ward;<br/>
the word of God to give me speech,<br/>
His heavenly host to be my guard.</p>
<p>Christ be with me, Christ within me,<br/>
Christ behind me, Christ before me,<br/>
Christ beside me, Christ to win me,<br/>
Christ to comfort and restore me,<br/>
Christ beneath me, Christ above me,<br/>
Christ in quiet, Christ in danger,<br/>
Christ in hearts of all that love me,<br/>
Christ in mouth of friend and stranger.</p>
<p>I bind unto myself the Name,<br/>
the strong Name of the Trinity;<br/>
by invocation of the same,<br/>
the Three in One, and One in Three.<br/>
Of whom all nature hath creation,<br/>
eternal Father, Spirit, Word:<br/>
praise to the Lord of my salvation,<br/>
salvation is of Christ the Lord.</p>
<p>Amen.</p>`,
    notes: "This ancient lorica (breastplate prayer) is traditionally attributed to Saint Patrick, the patron saint of Ireland, who used it as a prayer of protection on his mission to convert the Irish. It is also known as the Deer's Cry.",
    sortOrder: 52,
  },
  {
    title: "Magnificat",
    category: "Marian Prayers",
    origin: "Luke 1:46–55 — The Canticle of Mary",
    text: `<p>My soul proclaims the greatness of the Lord,<br/>
my spirit rejoices in God my Savior,<br/>
for he has looked with favor on his lowly servant.<br/>
From this day all generations will call me blessed:</p>
<p>the Almighty has done great things for me,<br/>
and holy is his Name.<br/>
He has mercy on those who fear him<br/>
in every generation.</p>
<p>He has shown the strength of his arm,<br/>
he has scattered the proud in their conceit.<br/>
He has cast down the mighty from their thrones,<br/>
and has lifted up the lowly.</p>
<p>He has filled the hungry with good things,<br/>
and the rich he has sent away empty.<br/>
He has come to the help of his servant Israel<br/>
for he has remembered his promise of mercy,<br/>
the promise he made to our fathers,<br/>
to Abraham and his children forever.</p>
<p>Glory to the Father, and to the Son,<br/>
and to the Holy Spirit:<br/>
as it was in the beginning, is now,<br/>
and will be for ever. Amen.</p>`,
    latinText: "Magnificat anima mea Dominum, et exsultavit spiritus meus in Deo salutari meo, quia respexit humilitatem ancillae suae...",
    notes: "Mary's canticle of praise, sung at the Annunciation (Luke 1:46–55). It is prayed daily at Evening Prayer (Vespers) in the Liturgy of the Hours. One of the oldest and most beautiful prayers in Christian tradition.",
    sortOrder: 53,
  },
  {
    title: "Come Holy Spirit",
    category: "Devotions",
    origin: "Traditional Catholic Prayer",
    text: `<p>Come Holy Spirit,<br/>
fill the hearts of your faithful<br/>
and kindle in them the fire of your love.</p>
<p>Send forth your Spirit<br/>
and they shall be created.<br/>
And you shall renew the face of the earth.</p>
<p>O God, who by the light of the Holy Spirit<br/>
did instruct the hearts of the faithful,<br/>
grant that by the same Holy Spirit<br/>
we may be truly wise<br/>
and ever enjoy his consolations,<br/>
through Christ our Lord.</p>
<p>Amen.</p>`,
    latinText: "Veni, Sancte Spiritus, reple tuorum corda fidelium, et tui amoris in eis ignem accende.",
    notes: "This invocation of the Holy Spirit is prayed before important decisions, study, and especially before reading Sacred Scripture. It is traditional to pray it at the beginning of meetings and councils of the Church.",
    sortOrder: 54,
  },
  {
    title: "Angel of God",
    category: "Daily Prayers",
    origin: "Traditional — first appeared in the Enchiridion (c. 1400)",
    text: `<p>Angel of God,<br/>
my guardian dear,<br/>
to whom God's love<br/>
commits me here,<br/>
ever this day<br/>
be at my side,<br/>
to light and guard,<br/>
to rule and guide.</p>
<p>Amen.</p>`,
    notes: "The Guardian Angel Prayer has been part of Catholic piety for centuries. The Church teaches that God assigns a guardian angel to every person from birth (CCC 336). This simple prayer is traditionally taught to children as one of their first prayers.",
    sortOrder: 55,
  },
  {
    title: "Act of Spiritual Communion",
    category: "Sacramental Prayers",
    origin: "Attributed to Saint Alphonsus Liguori (1696–1787)",
    text: `<p>My Jesus,<br/>
I believe that You are present in the Most Holy Sacrament.<br/>
I love You above all things,<br/>
and I desire to receive You into my soul.<br/>
Since I cannot at this moment receive You sacramentally,<br/>
come at least spiritually into my heart.</p>
<p>I embrace You as if You were already there<br/>
and unite myself wholly to You.<br/>
Never permit me to be separated from You.</p>
<p>Amen.</p>`,
    notes: "A spiritual communion is an act of desire to receive Jesus in the Eucharist when sacramental Communion is not possible. Saint Alphonsus Liguori, Doctor of the Church, popularized this prayer. It is especially valuable when watching Mass on television or unable to receive.",
    sortOrder: 56,
  },
  {
    title: "Sacred Heart Consecration",
    category: "Devotions",
    origin: "Traditional Prayer of Consecration to the Sacred Heart",
    text: `<p>I give myself and consecrate to the Sacred Heart of our Lord Jesus Christ my person and my life, my actions, pains, and sufferings, so that I may be unwilling to make use of any part of my being other than to honor, love, and glorify the Sacred Heart.</p>
<p>This is my unchanging purpose, namely, to be all His, and to do all things for the love of Him, at the same time renouncing with all my heart whatever is displeasing to Him. I therefore take You, O Sacred Heart, to be the only object of my love, the guardian of my life, my assurance of salvation, the remedy of my weakness and inconstancy, the atonement for all the faults of my life, and my sure refuge at the hour of death.</p>
<p>Be then, O Heart of goodness, my justification before God the Father, and turn away from me the strokes of His righteous anger. O Heart of love, I put all my confidence in You, for I fear everything from my own wickedness and frailty, but I hope for all things from Your goodness and bounty.</p>
<p>Remove from me all that can displease You or resist Your holy will; let Your pure love imprint Your image so deeply upon my heart, that I shall never be able to forget You or to be separated from You.</p>
<p>May I obtain from all Your loving kindness the grace of having my name written in Your Heart, for in You I desire to place all my happiness and glory, living and dying in bondage to You.</p>
<p>Amen.</p>`,
    notes: "The devotion to the Sacred Heart was revealed to Saint Margaret Mary Alacoque (1647–1690) at Paray-le-Monial, France. The feast of the Sacred Heart is celebrated on the Friday after the second Sunday after Pentecost.",
    sortOrder: 57,
  },
  {
    title: "Prayer Before the Crucifix",
    category: "Devotions",
    origin: "Saint Francis of Assisi (c. 1182–1226) — prayed before the Cross of San Damiano",
    text: `<p>Most High, glorious God,<br/>
enlighten the darkness of my heart<br/>
and give me true faith,<br/>
certain hope,<br/>
and perfect charity,<br/>
sense and knowledge, Lord,<br/>
that I may carry out<br/>
Your holy and true command.</p>
<p>Amen.</p>`,
    notes: "Saint Francis prayed this prayer before the crucifix in the ruined chapel of San Damiano, from which Christ spoke to him: 'Francis, go and repair my house.' This prayer sparked his conversion and the foundation of the Franciscan order.",
    sortOrder: 58,
  },
  {
    title: "Prayer for the Holy Souls in Purgatory",
    category: "Prayers for the Dead",
    origin: "Traditional Catholic Prayer",
    text: `<p>O God, the Creator and Redeemer of all the faithful,<br/>
grant to the souls of your departed servants<br/>
full remission of all their sins,<br/>
that through pious supplications<br/>
they may obtain the pardon they have always desired.</p>
<p>You who live and reign for ever and ever.</p>
<p>Amen.</p>
<p><em>Eternal rest grant unto them, O Lord,<br/>
and let perpetual light shine upon them.<br/>
May they rest in peace.<br/>
Amen.</em></p>`,
    notes: "The Church teaches that those who die in God's grace but still need purification undergo purification in Purgatory before entering Heaven (CCC 1030–1032). We can assist the holy souls through prayer, fasting, and almsgiving, especially the offering of Holy Mass.",
    sortOrder: 59,
  },
  {
    title: "Te Deum",
    category: "Praise & Thanksgiving",
    origin: "Ancient hymn — traditionally attributed to Saints Ambrose and Augustine (4th century)",
    text: `<p>You are God: we praise You.<br/>
You are the Lord: we acclaim You.<br/>
You are the eternal Father:<br/>
all creation worships You.</p>
<p>To You all angels, all the powers of heaven,<br/>
cherubim and seraphim, sing in endless praise:<br/>
<em>Holy, holy, holy Lord, God of power and might,<br/>
heaven and earth are full of Your glory.</em></p>
<p>The glorious company of apostles praise You.<br/>
The noble fellowship of prophets praise You.<br/>
The white-robed army of martyrs praise You.<br/>
Throughout the world the holy Church acclaims You:</p>
<p>Father, of majesty unbounded,<br/>
your true and only Son, worthy of all worship,<br/>
and the Holy Spirit, advocate and guide.</p>
<p>You, Christ, are the King of glory,<br/>
the eternal Son of the Father.<br/>
When You became man to set us free<br/>
You did not spurn the Virgin's womb.</p>
<p>You overcame the sting of death,<br/>
and opened the kingdom of heaven to all believers.<br/>
You are seated at God's right hand in glory.<br/>
We believe that You will come and be our judge.</p>
<p>Come then, Lord, and help Your people,<br/>
bought with the price of Your own blood,<br/>
and bring us with Your saints<br/>
to glory everlasting.</p>
<p>Save Your people, Lord, and bless Your inheritance.<br/>
Govern and uphold them now and always.<br/>
Day by day we bless You.<br/>
We praise Your name for ever.</p>
<p>Keep us today, Lord, from all sin.<br/>
Have mercy on us, Lord, have mercy.<br/>
Lord, show us Your love and mercy;<br/>
for we put our trust in You.</p>
<p>In You, Lord, is our hope:<br/>
and we shall never hope in vain.</p>
<p>Amen.</p>`,
    latinText: "Te Deum laudamus: te Dominum confitemur. Te aeternum Patrem omnis terra veneratur...",
    notes: "The Te Deum is sung at the end of Matins (Office of Readings) on Sundays and feast days outside Lent. It is also sung in thanksgiving for special blessings. One of the greatest hymns of the Church.",
    sortOrder: 60,
  },
  {
    title: "Litany of the Blessed Virgin Mary",
    category: "Litanies",
    origin: "Traditional — approved by Pope Sixtus V in 1587, known as the Litany of Loreto",
    text: `<p>Lord, have mercy. <em>Lord, have mercy.</em><br/>
Christ, have mercy. <em>Christ, have mercy.</em><br/>
Lord, have mercy. <em>Lord, have mercy.</em></p>
<p>Christ, hear us. <em>Christ, graciously hear us.</em></p>
<p>God the Father of heaven, <em>have mercy on us.</em><br/>
God the Son, Redeemer of the world, <em>have mercy on us.</em><br/>
God the Holy Spirit, <em>have mercy on us.</em><br/>
Holy Trinity, one God, <em>have mercy on us.</em></p>
<p>Holy Mary, <em>pray for us.</em><br/>
Holy Mother of God, <em>pray for us.</em><br/>
Most honored of virgins, <em>pray for us.</em><br/>
Mother of Christ, <em>pray for us.</em><br/>
Mother of the Church, <em>pray for us.</em><br/>
Mother of Mercy, <em>pray for us.</em><br/>
Mother of divine grace, <em>pray for us.</em><br/>
Mother of Hope, <em>pray for us.</em><br/>
Purest of mothers, <em>pray for us.</em><br/>
Chaste mother, <em>pray for us.</em><br/>
Inviolate mother, <em>pray for us.</em><br/>
Untouched by sin, <em>pray for us.</em><br/>
Most lovable of mothers, <em>pray for us.</em><br/>
Model of motherhood, <em>pray for us.</em><br/>
Mother of good counsel, <em>pray for us.</em><br/>
Mother of our Creator, <em>pray for us.</em><br/>
Mother of our Savior, <em>pray for us.</em><br/>
Virgin most prudent, <em>pray for us.</em><br/>
Virgin most venerable, <em>pray for us.</em><br/>
Virgin most renowned, <em>pray for us.</em><br/>
Virgin most powerful, <em>pray for us.</em><br/>
Virgin most merciful, <em>pray for us.</em><br/>
Virgin most faithful, <em>pray for us.</em><br/>
Mirror of justice, <em>pray for us.</em><br/>
Seat of wisdom, <em>pray for us.</em><br/>
Cause of our joy, <em>pray for us.</em><br/>
Spiritual vessel, <em>pray for us.</em><br/>
Vessel of honor, <em>pray for us.</em><br/>
Singular vessel of devotion, <em>pray for us.</em><br/>
Mystical rose, <em>pray for us.</em><br/>
Tower of David, <em>pray for us.</em><br/>
Tower of ivory, <em>pray for us.</em><br/>
House of gold, <em>pray for us.</em><br/>
Ark of the covenant, <em>pray for us.</em><br/>
Gate of heaven, <em>pray for us.</em><br/>
Morning star, <em>pray for us.</em><br/>
Health of the sick, <em>pray for us.</em><br/>
Refuge of sinners, <em>pray for us.</em><br/>
Solace of migrants, <em>pray for us.</em><br/>
Comfort of the afflicted, <em>pray for us.</em><br/>
Help of Christians, <em>pray for us.</em><br/>
Queen of angels, <em>pray for us.</em><br/>
Queen of patriarchs, <em>pray for us.</em><br/>
Queen of prophets, <em>pray for us.</em><br/>
Queen of apostles, <em>pray for us.</em><br/>
Queen of martyrs, <em>pray for us.</em><br/>
Queen of confessors, <em>pray for us.</em><br/>
Queen of virgins, <em>pray for us.</em><br/>
Queen of all saints, <em>pray for us.</em><br/>
Queen conceived without original sin, <em>pray for us.</em><br/>
Queen assumed into heaven, <em>pray for us.</em><br/>
Queen of the holy rosary, <em>pray for us.</em><br/>
Queen of families, <em>pray for us.</em><br/>
Queen of peace, <em>pray for us.</em></p>
<p>Lamb of God, who takes away the sins of the world, <em>spare us, O Lord.</em><br/>
Lamb of God, who takes away the sins of the world, <em>graciously hear us, O Lord.</em><br/>
Lamb of God, who takes away the sins of the world, <em>have mercy on us.</em></p>
<p>Pray for us, O holy Mother of God,<br/>
that we may be made worthy of the promises of Christ.</p>
<p>Let us pray. Grant, we beseech You, O Lord God, that we Your servants may enjoy perpetual health of mind and body; and by the glorious intercession of the Blessed Mary, ever Virgin, may be delivered from present sorrow, and obtain eternal joy. Through Christ our Lord. Amen.</p>`,
    latinText: "Kyrie eleison. Christe eleison. Kyrie eleison. Sancta Maria, ora pro nobis...",
    notes: "The Litany of Loreto (Litania Lauretana) has been prayed at the Holy House of Loreto in Italy since at least the 12th century. It is traditionally recited after the Rosary. It contains over 50 titles for Our Lady drawn from Scripture, Tradition, and theological reflection.",
    sortOrder: 61,
  },
  {
    title: "Prayer to the Holy Trinity",
    category: "Devotions",
    origin: "Traditional Catholic Prayer",
    text: `<p>Glory be to the Father, who by His almighty power and love created me, making me in the image and likeness of God.</p>
<p>Glory be to the Son, who by His Precious Blood delivered me from hell, and opened for me the gates of heaven.</p>
<p>Glory be to the Holy Spirit, who has sanctified me in the sacrament of Baptism, and continues to sanctify me by the graces I receive daily.</p>
<p>O most Holy Trinity, Triune God, I worship You as my Creator, I adore You as my Redeemer, I praise and glorify You as my Sanctifier.</p>
<p>May all men know, love, and praise You forever.</p>
<p>Amen.</p>`,
    notes: "A prayer honoring the Most Holy Trinity, the central mystery of Christian faith. The Trinity — Father, Son, and Holy Spirit — is affirmed at the beginning of every prayer with the Sign of the Cross.",
    sortOrder: 62,
  },
  {
    title: "Prayer for Priests",
    category: "Prayers for Others",
    origin: "Traditional Catholic Prayer",
    text: `<p>O Jesus, I pray for your faithful and fervent priests; for your unfaithful and tepid priests; for your priests laboring at home or abroad in distant mission fields; for your tempted priests; for your lonely and desolate priests; for your dying priests; for the souls of your priests in Purgatory.</p>
<p>But above all I recommend to you the priests dearest to me: the priest who baptized me; the priests at whose Masses I assisted; the priests who gave me Your Body and Blood in Holy Communion; the priests who taught and instructed me, or helped me and encouraged me; all the priests to whom I am indebted in any other way.</p>
<p>O Jesus, keep them all close to your heart, and bless them abundantly in time and in eternity.</p>
<p>Amen.</p>`,
    notes: "A prayer asking God's blessing on priests, who act in persona Christi (in the person of Christ) in the sacraments. The Church encourages the faithful to pray regularly for their priests.",
    sortOrder: 63,
  },
];

export const seedPrayers2 = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("prayers").collect();
    const existingSlugs = new Set(existing.map((p) => p.slug));

    let added = 0;
    for (const p of NEW_PRAYERS) {
      const s = slug(p.title);
      if (!existingSlugs.has(s)) {
        await ctx.db.insert("prayers", {
          title: p.title,
          slug: s,
          category: p.category,
          text: p.text,
          latinText: p.latinText,
          origin: p.origin,
          notes: p.notes,
          sortOrder: p.sortOrder,
          isActive: true,
        });
        added++;
      }
    }
    return { added };
  },
});
