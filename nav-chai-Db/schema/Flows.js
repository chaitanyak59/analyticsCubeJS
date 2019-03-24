cube(`Flows`, {
  sql: `SELECT * FROM letznav.flows`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, externalUniqueId, createdDate, updatedDate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    alwaysVisible: {
      sql: `always_visible`,
      type: `string`
    },
    
    externalUniqueId: {
      sql: `external_unique_id`,
      type: `string`
    },
    
    isDeleted: {
      sql: `is_deleted`,
      type: `string`
    },
    
    createdDate: {
      sql: `created_date`,
      type: `time`
    },
    
    updatedDate: {
      sql: `updated_date`,
      type: `time`
    }
  }
});
