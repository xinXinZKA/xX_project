module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    
    const ZhuC = app.model.define('ZhuC', { //sequelize会自动创建主键
        name: STRING,
        pass: STRING,
        // passwd: STRING,
    })

    return ZhuC;
}