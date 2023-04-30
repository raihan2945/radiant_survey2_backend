const {
  DataTypes
} = require('sequelize');
const Sequelize = require("sequelize");

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    hospital: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "hospital"
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone"
    },
    relative_patient: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "relative_patient"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    stroke_count: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "stroke_count"
    },
    havePatient: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "havePatient"
    },
    aware: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "aware"
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "code"
    },

    // // -----------------------
    // a_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "a_input"
    // },
    // b_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "b_input"
    // },
    // c_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "c_input"
    // },
    // d_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "d_input"
    // },
    // e_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "e_input"
    // },
    // f_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "f_input"
    // },
    // g_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "g_input"
    // },
    // h_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "h_input"
    // },
    // i_input: {
    //   type: DataTypes.STRING(255),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "i_input"
    // },

    // ------------------------------------

    // a_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "a_checked"
    // },
    // b_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "b_checked"
    // },
    // c_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "c_checked"
    // },
    // d_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "d_checked"
    // },
    // e_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "e_checked"
    // },
    // f_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "f_checked"
    // },
    // g_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "g_checked"
    // },
    // h_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "h_checked"
    // },
    // i_checked: {
    //   type: DataTypes.INTEGER(0),
    //   allowNull: true,
    //   defaultValue: null,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "i_checked"
    // },


    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updated_at"
    },
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: [],
    createdAt: false,
    updatedAt: false
  };
  const UsersModel = sequelize.define("users_model", attributes, options);
  return UsersModel;
};
