import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { getCurrentUser } from "../utils/authentication";
import { getContactAddressAsync } from "../utils/api-calls";
import { Navigation } from "../components";
