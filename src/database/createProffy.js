module.exports =  async function(db,{ proffyValue,classValue, classScheduleValues }) {
    // insert data into the proffys table
   const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
   `)

   const proffy_id = insertedProffy.lastID

   // insert data into the classes table
   const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
   `)

    const class_id = insertedClass.lastID

     // insert data into the class_schedule table
     const insertedAllClassScheduleValues  = classScheduleValues.map((classScheduleValues) => {
         return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValues.weekday}",
                "${classScheduleValues.time_from}",
                "${classScheduleValues.time_to}"
            );
        `) 
     })

     // here I will execute all db.runs() of class_schedules
     await Promise.all(insertedAllClassScheduleValues)

}                 
