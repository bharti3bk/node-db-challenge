
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", table => {
            table.increments();  
           
             table.string("name",255).notNullable();

            table.boolean("completed").notNullable().defaultTo(false);

            table.text("description"); 
            
        })
        .createTable("resources", table => {
           table.increments(); 
 
           table.string("name",255).unique().notNullable();
           
           table.text("description")
           
        })
        .createTable("tasks", table => { 

           table.increments();  
           
            table.text("description", 255).notNullable();
            
             table.boolean("completed").notNullable().defaultTo(false);

            table.text("notes"); 
            table.integer("project_id")
            .unsigned()
            .references("id")
            .inTable("projects") 
        })
        .createTable("project_resources",table=> {
           table
                .integer("project_id")
                .unsigned()
                .inTable("projects")
                .references("id")
           table
                .integer("resource_id")
                .unsigned()
                .references("id")
                .inTable("resources")
           table.primary(["project_id","resource_id"])
        }); 
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("project_resources") 
        .dropTableIfExists("projects")
        .dropTableIfExists("resources") 
        .dropTableIfExists("tasks")
        
};