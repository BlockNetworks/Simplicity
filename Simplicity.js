/*
Simplicity Client 1.0 - BETA
Made by EchoHackCmd
*/

(function(_0x19a34d, _0x27abd6) {
    var _0x10c5af = function(_0x40b7ab) {
        while (--_0x40b7ab) {
            _0x19a34d['push'](_0x19a34d['shift']());
        }
    };
    _0x10c5af(++_0x27abd6);
}(_0x3ba2, 0xe0));
var _0x1d46 = function(_0x4236d4, _0x44f76c) {
    _0x4236d4 = _0x4236d4 - 0x0;
    var _0x1d5409 = _0x3ba2[_0x4236d4];
    return _0x1d5409;
};
var ctx = com[_0x1d46('0x0')][_0x1d46('0x1')][_0x1d46('0x2')]['currentMainActivity'][_0x1d46('0x3')]();
var clientversion = 0x1;
var aimbot = ![],
    hitbox = ![],
    hittp = ![],
    speed = ![],
    jesus = ![],
    spider = ![],
    bouncefly = ![],
    nofall = ![],
    flight = ![],
    itemduper = ![],
    nodownglide = ![],
    spam = ![];
var aimrange = 0x4,
    hitboxwidthval = 0x4,
    hitboxheightval = 0x4,
    hittpvalue = 0x4,
    speedvalue = 0x4;
stepSpeed = 0.2, jesusvalue = 0.1, nodownglideval = 0x0, spamdelaytick = 0xc8, itemDuperTickValue = 0xc8;
var hittpMode = 0x1,
    speedMode = 0x1,
    stepMode = 0x1,
    jesusMode = 0x1,
    nodownglideMode = 0x1,
    spamMode = 0x1,
    itemduperMode = 0x1;
var aimbotSettingsToggle = ![],
    hitboxSettingsToggle = ![],
    hittpSettingsToggle = ![],
    speedSettingsToggle = ![],
    stepSettingsToggle = ![],
    jesusSettingsToggle = ![],
    nodownglideSettingsToggle = ![],
    spamSettingsToggle = ![],
    itemduperSettingsToggle = ![];
var friendArray = [_0x1d46('0x4'), _0x1d46('0x5'), _0x1d46('0x6')];
var mainMenuIsOpen = ![],
    combatMenuIsOpen = ![],
    movementMenuIsOpen = ![],
    playerMenuIsOpen = ![],
    exploitsMenuIsOpen = ![];
var buttonBackground = new android[(_0x1d46('0x7'))][(_0x1d46('0x8'))]['GradientDrawable']();
buttonBackground[_0x1d46('0x9')](android[_0x1d46('0x7')]['Color'][_0x1d46('0xa')]);
buttonBackground[_0x1d46('0xb')](0x4, android['graphics'][_0x1d46('0xc')][_0x1d46('0xd')]);
buttonBackground[_0x1d46('0xe')](0x2);
var buttonBackground2 = new android[(_0x1d46('0x7'))][(_0x1d46('0x8'))]['GradientDrawable']();
buttonBackground2[_0x1d46('0x9')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xa')]);
buttonBackground2['setStroke'](0x4, android['graphics']['Color']['RED']);
buttonBackground2['setCornerRadius'](0x2);
var buttonBackground3 = new android[(_0x1d46('0x7'))][(_0x1d46('0x8'))][(_0x1d46('0xf'))]();
buttonBackground3[_0x1d46('0x9')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xa')]);
buttonBackground3[_0x1d46('0xb')](0x4, android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x10')]);
buttonBackground3[_0x1d46('0xe')](0x2);
var Simplicity = {
    'Player': {
        'isInAir': function() {
            var _0x17ee3c = Math[_0x1d46('0x11')](Player[_0x1d46('0x12')]());
            var _0x14e032 = Math['floor'](Player[_0x1d46('0x13')]() - 0x2);
            var _0x180edd = Math[_0x1d46('0x11')](Player['getZ']());
            if (getTile(_0x17ee3c, _0x14e032, _0x180edd) == 0x0) {
                return !![];
            }
        },
        'isInLiquid': function() {
            var _0x5092f2 = Math[_0x1d46('0x11')](Player['getX']());
            var _0x40afcb = Math['floor'](Player[_0x1d46('0x13')]() - 1.2);
            var _0x141878 = Math[_0x1d46('0x11')](Player['getY']() - 0x2);
            var _0x27e034 = Math[_0x1d46('0x11')](Player['getZ']());
            if (getTile(_0x5092f2, _0x40afcb, _0x27e034) == 0x8) {
                return !![];
            }
            if (getTile(_0x5092f2, _0x40afcb, _0x27e034) == 0x9) {
                return !![];
            }
            if (getTile(_0x5092f2, _0x141878, _0x27e034) == 0xa) {
                return !![];
            }
            if (getTile(_0x5092f2, _0x141878, _0x27e034) == 0xb) {
                return !![];
            }
        },
        'isOnGround': function() {
            var _0x254dd3 = Math[_0x1d46('0x11')](Player[_0x1d46('0x12')]());
            var _0x3c3f4e = Math[_0x1d46('0x11')](Player[_0x1d46('0x13')]());
            var _0x982404 = Math[_0x1d46('0x11')](Player[_0x1d46('0x14')]());
            if (getTile(_0x254dd3, _0x3c3f4e - 0x2, _0x982404) != 0x0) {
                return !![];
            }
        },
        'isFalling': function() {
            if (Entity[_0x1d46('0x15')](getPlayerEnt()) < -0.5) {
                return !![];
            }
        },
        'isCollided': function() {
            var _0x3d49b0 = Entity[_0x1d46('0x12')](getPlayerEnt());
            var _0x35d7d3 = Entity[_0x1d46('0x14')](getPlayerEnt());
            var _0x450824 = Math[_0x1d46('0x16')](_0x3d49b0 - 0.5);
            var _0x550325 = Math[_0x1d46('0x16')](_0x35d7d3 - 0.5);
            while (_0x3d49b0 < 0x1) _0x3d49b0 += 0x1;
            while (_0x35d7d3 < 0x1) _0x35d7d3 += 0x1;
            while (_0x3d49b0 > 0x1) _0x3d49b0 -= 0x1;
            while (_0x35d7d3 > 0x1) _0x35d7d3 -= 0x1;
            if (Math[_0x1d46('0x16')](_0x3d49b0 * 0x64) == 0x1f) _0x3d49b0 -= 0.01;
            if (Math[_0x1d46('0x16')](_0x35d7d3 * 0x64) == 0x1f) _0x35d7d3 -= 0.01;
            if (Math[_0x1d46('0x16')](_0x3d49b0 * 0x64) == 0x45) _0x3d49b0 += 0.01;
            if (Math[_0x1d46('0x16')](_0x35d7d3 * 0x64) == 0x45) _0x35d7d3 += 0.01;
            if (Math[_0x1d46('0x16')](_0x3d49b0 * 0x64) == 0x1e) _0x450824--;
            if (Math[_0x1d46('0x16')](_0x35d7d3 * 0x64) == 0x1e) _0x550325--;
            if (Math[_0x1d46('0x16')](_0x3d49b0 * 0x64) == 0x46) _0x450824++;
            if (Math[_0x1d46('0x16')](_0x35d7d3 * 0x64) == 0x46) _0x550325++;
            if (getTile(_0x450824, Entity[_0x1d46('0x13')](getPlayerEnt()), _0x550325) == 0x0 && getTile(_0x450824, Entity[_0x1d46('0x13')](getPlayerEnt()) - 0x1, _0x550325) == 0x0) return ![];
            if (Block['getDestroyTime'](getTile(_0x450824, Entity['getY'](getPlayerEnt()) - 0x1, _0x550325)) <= 0.1 && Block['getDestroyTime'](getTile(_0x450824, Entity['getY'](getPlayerEnt()), _0x550325)) <= 0.1) return ![];
            if (Math['round'](_0x3d49b0 * 0x64) == 0x1e || Math[_0x1d46('0x16')](_0x3d49b0 * 0x64) == 0x46) return !![];
            if (Math[_0x1d46('0x16')](_0x35d7d3 * 0x64) == 0x1e || Math[_0x1d46('0x16')](_0x35d7d3 * 0x64) == 0x46) return !![];
            return ![];
        },
        'crosshairAimAt': function(_0x28c74d, _0x169042) {
            if (_0x28c74d != null) {
                var _0x20e7e8 = Entity[_0x1d46('0x12')](_0x28c74d) - getPlayerX();
                var _0x4e9a79 = Entity[_0x1d46('0x13')](_0x28c74d) - getPlayerY();
                var _0x402bc4 = Entity[_0x1d46('0x14')](_0x28c74d) - getPlayerZ();
                if (_0x169042 != null && _0x169042 instanceof Array) {
                    _0x20e7e8 = Entity[_0x1d46('0x12')](_0x28c74d) - _0x169042[0x0];
                    _0x4e9a79 = Entity[_0x1d46('0x13')](_0x28c74d) - _0x169042[0x1];
                    _0x402bc4 = Entity['getZ'](_0x28c74d) - _0x169042[0x2];
                }
                if (Entity[_0x1d46('0x17')](_0x28c74d) != 0x3f) _0x4e9a79 += 0.5;
                var _0x15ffb1 = 0.5 + Entity[_0x1d46('0x12')](_0x28c74d);
                var _0x136a00 = Entity[_0x1d46('0x13')](_0x28c74d);
                var _0x26abe3 = 0.5 + Entity[_0x1d46('0x14')](_0x28c74d);
                var _0x36e8bb = Math[_0x1d46('0x18')](_0x20e7e8 * _0x20e7e8 + _0x4e9a79 * _0x4e9a79 + _0x402bc4 * _0x402bc4);
                var _0x4e9a79 = _0x4e9a79 / _0x36e8bb;
                var _0x22df5f = Math['asin'](_0x4e9a79);
                _0x22df5f = _0x22df5f * 0xb4 / Math['PI'];
                _0x22df5f = -_0x22df5f;
                if (!Simplicity[_0x1d46('0x19')][_0x1d46('0x1a')](friendArray, Entity[_0x1d46('0x1b')](_0x28c74d))) {
                    var _0x52dad9 = -Math[_0x1d46('0x1c')](_0x15ffb1 - (Player['getX']() + 0.5), _0x26abe3 - (Player[_0x1d46('0x14')]() + 0.5)) * (0xb4 / Math['PI']);
                    if (_0x22df5f < 0x59 && _0x22df5f > -0x59) {
                        Entity[_0x1d46('0x1d')](Player[_0x1d46('0x1e')](), _0x52dad9, _0x22df5f);
                    }
                }
            }
        }
    },
    'World': {
        'levelExists': function() {
            if (Player[_0x1d46('0x1f')]() != null) {
                return !![];
            }
        },
        'getNearestEntity': function(_0x502e55) {
            var _0xefbf7c = Entity[_0x1d46('0x20')]();
            var _0x477a03 = Server[_0x1d46('0x21')]();
            var _0x57861d = _0x502e55;
            var _0x24aed0 = null;
            for (var _0x28f8e3 = 0x0; _0x28f8e3 < _0xefbf7c[_0x1d46('0x22')]; _0x28f8e3++) {
                var _0x30a2fc = Entity[_0x1d46('0x12')](_0xefbf7c[_0x28f8e3]) - getPlayerX();
                var _0x1b092d = Entity[_0x1d46('0x13')](_0xefbf7c[_0x28f8e3]) - getPlayerY();
                var _0x3e854 = Entity[_0x1d46('0x14')](_0xefbf7c[_0x28f8e3]) - getPlayerZ();
                var _0x52ecf1 = Math[_0x1d46('0x18')](Math['pow'](_0x30a2fc, 0x2) + Math[_0x1d46('0x23')](_0x1b092d, 0x2) + Math['pow'](_0x3e854, 0x2));
                if (_0x52ecf1 < _0x57861d && _0x52ecf1 > 0x0 && Entity['getEntityTypeId'](_0xefbf7c[_0x28f8e3]) <= 0x3f && Entity['getHealth'](_0xefbf7c[_0x28f8e3]) >= 0x1) {
                    _0x57861d = _0x52ecf1;
                    _0x24aed0 = _0xefbf7c[_0x28f8e3];
                }
            }
            for (var _0x28f8e3 = 0x0; _0x28f8e3 < _0x477a03[_0x1d46('0x22')]; _0x28f8e3++) {
                var _0x30a2fc = Entity[_0x1d46('0x12')](_0x477a03[_0x28f8e3]) - getPlayerX();
                var _0x1b092d = Entity[_0x1d46('0x13')](_0x477a03[_0x28f8e3]) - getPlayerY();
                var _0x3e854 = Entity[_0x1d46('0x14')](_0x477a03[_0x28f8e3]) - getPlayerZ();
                var _0x52ecf1 = Math[_0x1d46('0x18')](Math['pow'](_0x30a2fc, 0x2) + Math[_0x1d46('0x23')](_0x1b092d, 0x2) + Math[_0x1d46('0x23')](_0x3e854, 0x2));
                if (_0x52ecf1 < _0x57861d && _0x52ecf1 > 0x0 && Entity[_0x1d46('0x24')](_0x477a03[_0x28f8e3]) >= 0x1) {
                    _0x57861d = _0x52ecf1;
                    _0x24aed0 = _0x477a03[_0x28f8e3];
                }
            }
            return _0x24aed0;
        }
    },
    'Other': {
        'contains': function(_0x49d700, _0x4a89ac) {
            for (var _0x31fd7c = 0x0; _0x31fd7c < _0x49d700['length']; _0x31fd7c++) {
                if (_0x49d700[_0x31fd7c] === _0x4a89ac) {
                    return !![];
                }
            }
            return ![];
        },
        'removeFromArray': function(_0x565e9f, _0xf05e0c) {
            var _0x47314c = _0x565e9f[_0x1d46('0x25')](_0xf05e0c);
            if (_0x47314c !== -0x1) {
                _0x565e9f[_0x1d46('0x26')](_0x47314c, 0x1);
            }
            return _0x565e9f;
        }
    }
};

function mainMenuBtn() {
    ctx['runOnUiThread'](new java[(_0x1d46('0x27'))][(_0x1d46('0x28'))]({
        'run': function() {
            try {
                var _0x178573 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x178573[_0x1d46('0x2b')](0x1);
                var _0x32513 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x32513[_0x1d46('0x2d')]('S');
                _0x32513['setBackground'](buttonBackground);
                _0x32513[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x32513['setOnClickListener'](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x56e3d0) {
                        GUIbtn['dismiss']();
                        mainMenu();
                        menuHandler();
                        mainMenuIsOpen = !![];
                    }
                }));
                _0x178573['addView'](_0x32513);
                GUIbtn = new android[(_0x1d46('0x29'))][(_0x1d46('0x33'))](_0x178573, android[_0x1d46('0x29')][_0x1d46('0x34')][_0x1d46('0x35')][_0x1d46('0x36')], android[_0x1d46('0x29')][_0x1d46('0x34')][_0x1d46('0x35')][_0x1d46('0x36')]);
                GUIbtn['setBackgroundDrawable'](new android['graphics'][(_0x1d46('0x8'))]['ColorDrawable'](android[_0x1d46('0x7')][_0x1d46('0xc')]['TRANSPARENT']));
                GUIbtn[_0x1d46('0x37')](ctx[_0x1d46('0x38')]()['getDecorView'](), android['view'][_0x1d46('0x39')][_0x1d46('0x3a')] | android[_0x1d46('0x30')][_0x1d46('0x39')][_0x1d46('0x3b')], 0x0, 0x0);
            } catch (_0x4c88ee) {
                print(_0x1d46('0x3c') + _0x4c88ee);
            }
        }
    }));
}

function menuHandler() {
    ctx[_0x1d46('0x3d')](new java[(_0x1d46('0x27'))][(_0x1d46('0x28'))]({
        'run': function() {
            try {
                var _0x3e1bd8 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x3e1bd8['setOrientation'](0x1);
                var _0xd9173 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0xd9173[_0x1d46('0x2d')]('X');
                _0xd9173['setBackground'](buttonBackground2);
                _0xd9173[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0xd9173[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x590f06) {
                        if (mainMenuIsOpen) {
                            GUIExit['dismiss']();
                            GUI['dismiss']();
                            mainMenuBtn();
                            mainMenuIsOpen = ![];
                        }
                        if (combatMenuIsOpen) {
                            combatMenuIsOpen = ![];
                            mainMenuIsOpen = !![];
                            combatGUI[_0x1d46('0x3f')]();
                            mainMenu();
                        }
                        if (movementMenuIsOpen) {
                            movementMenuIsOpen = ![];
                            mainMenuIsOpen = !![];
                            movementGUI['dismiss']();
                            mainMenu();
                        }
                        if (playerMenuIsOpen) {
                            playerMenuIsOpen = ![];
                            mainMenuIsOpen = !![];
                            playerGUI[_0x1d46('0x3f')]();
                            mainMenu();
                        }
                        if (exploitsMenuIsOpen) {
                            exploitsMenuIsOpen = ![];
                            mainMenuIsOpen = !![];
                            exploitsGUI[_0x1d46('0x3f')]();
                            mainMenu();
                        }
                        if (aimbotSettingsToggle) {
                            aimbotSettingsToggle = ![];
                        }
                        if (hitboxSettingsToggle) {
                            hitboxSettingsToggle = ![];
                        }
                        if (hittpSettingsToggle) {
                            hittpSettingsToggle = ![];
                        }
                        if (speedSettingsToggle) {
                            speedSettingsToggle = ![];
                        }
                        if (stepSettingsToggle) {
                            stepSettingsToggle = ![];
                        }
                        if (jesusSettingsToggle) {
                            jesusSettingsToggle = ![];
                        }
                        if (nodownglideSettingsToggle) {
                            nodownglideSettingsToggle = ![];
                        }
                        if (spamSettingsToggle) {
                            spamSettingsToggle = ![];
                        }
                        if (itemduperSettingsToggle) {
                            itemduperSettingsToggle = ![];
                        }
                    }
                }));
                _0x3e1bd8[_0x1d46('0x40')](_0xd9173);
                GUIExit = new android[(_0x1d46('0x29'))][(_0x1d46('0x33'))](_0x3e1bd8, android[_0x1d46('0x29')]['RelativeLayout'][_0x1d46('0x35')][_0x1d46('0x36')], android[_0x1d46('0x29')][_0x1d46('0x34')][_0x1d46('0x35')][_0x1d46('0x36')]);
                GUIExit['setBackgroundDrawable'](new android[(_0x1d46('0x7'))][(_0x1d46('0x8'))][(_0x1d46('0x41'))](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x42')]));
                GUIExit[_0x1d46('0x37')](ctx[_0x1d46('0x38')]()[_0x1d46('0x43')](), android[_0x1d46('0x30')][_0x1d46('0x39')][_0x1d46('0x3a')] | android[_0x1d46('0x30')][_0x1d46('0x39')][_0x1d46('0x3b')], 0x0, 0x0);
            } catch (_0x4ffc30) {
                print(_0x1d46('0x3c') + _0x4ffc30);
            }
        }
    }));
}

function mainMenu() {
    ctx[_0x1d46('0x3d')](new java[(_0x1d46('0x27'))]['Runnable']({
        'run': function() {
            try {
                var _0x281d1d = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x281d1d['setOrientation'](0x1);
                var _0x1cc152 = new android['widget'][(_0x1d46('0x2c'))](ctx);
                _0x1cc152['setText'](_0x1d46('0x44'));
                _0x1cc152[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color']['CYAN']);
                _0x1cc152['setBackground'](buttonBackground);
                _0x1cc152[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x1cc152[_0x1d46('0x3e')](new android['view'][(_0x1d46('0x31'))]['OnClickListener']({
                    'onClick': function(_0x21492a) {
                        GUI[_0x1d46('0x3f')]();
                        mainMenuIsOpen = ![];
                        combatMenuIsOpen = !![];
                        combatMenu();
                    }
                }));
                _0x281d1d[_0x1d46('0x40')](_0x1cc152);
                var _0x5cc68d = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x5cc68d[_0x1d46('0x2d')](_0x1d46('0x46'));
                _0x5cc68d[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x5cc68d[_0x1d46('0x47')](buttonBackground);
                _0x5cc68d[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x5cc68d[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x143fd9) {
                        GUI[_0x1d46('0x3f')]();
                        mainMenuIsOpen = ![];
                        movementMenuIsOpen = !![];
                        movementMenu();
                    }
                }));
                _0x281d1d['addView'](_0x5cc68d);
                var _0x12a9bd = new android['widget']['Button'](ctx);
                _0x12a9bd[_0x1d46('0x2d')](_0x1d46('0x48'));
                _0x12a9bd['setTextColor'](android['graphics'][_0x1d46('0xc')]['CYAN']);
                _0x12a9bd[_0x1d46('0x47')](buttonBackground);
                _0x12a9bd[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x12a9bd[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x5107d3) {
                        GUI[_0x1d46('0x3f')]();
                        mainMenuIsOpen = ![];
                        playerMenuIsOpen = !![];
                        playerMenu();
                    }
                }));
                _0x281d1d[_0x1d46('0x40')](_0x12a9bd);
                var _0x3294f1 = new android[(_0x1d46('0x29'))]['Button'](ctx);
                _0x3294f1[_0x1d46('0x2d')](_0x1d46('0x49'));
                _0x3294f1[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')]['CYAN']);
                _0x3294f1[_0x1d46('0x47')](buttonBackground);
                _0x3294f1['getBackground']()[_0x1d46('0x2f')](0x96);
                _0x3294f1[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))]['View']['OnClickListener']({
                    'onClick': function(_0x3120f5) {
                        GUI[_0x1d46('0x3f')]();
                        mainMenuIsOpen = ![];
                        exploitsMenuIsOpen = !![];
                        exploitsMenu();
                    }
                }));
                _0x281d1d[_0x1d46('0x40')](_0x3294f1);
                GUI = new android[(_0x1d46('0x29'))][(_0x1d46('0x33'))](_0x281d1d, android[_0x1d46('0x29')]['RelativeLayout'][_0x1d46('0x35')][_0x1d46('0x36')], android[_0x1d46('0x29')][_0x1d46('0x34')][_0x1d46('0x35')][_0x1d46('0x36')]);
                GUI[_0x1d46('0x4a')](new android[(_0x1d46('0x7'))][(_0x1d46('0x8'))]['ColorDrawable'](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x42')]));
                GUI[_0x1d46('0x37')](ctx['getWindow']()[_0x1d46('0x43')](), android[_0x1d46('0x30')][_0x1d46('0x39')][_0x1d46('0x4b')] | android[_0x1d46('0x30')][_0x1d46('0x39')][_0x1d46('0x4c')], 0x0, 0x0);
            } catch (_0x42af97) {
                print(_0x1d46('0x3c') + _0x42af97);
            }
        }
    }));
}

function combatMenu() {
    ctx[_0x1d46('0x3d')](new java[(_0x1d46('0x27'))][(_0x1d46('0x28'))]({
        'run': function() {
            try {
                var _0x4f9431 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                var _0x522463 = new android[(_0x1d46('0x29'))]['ScrollView'](ctx);
                var _0x3913d5 = new android[(_0x1d46('0x29'))]['LinearLayout'](ctx);
                _0x4f9431[_0x1d46('0x2b')](0x1);
                var _0x4d3e53 = new android[(_0x1d46('0x29'))]['LinearLayout'](ctx);
                _0x4d3e53['setOrientation'](0x1);
                var _0x4c7b07 = new android['widget'][(_0x1d46('0x2a'))](ctx);
                _0x4c7b07[_0x1d46('0x2b')](0x1);
                var _0x35b5ff = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x35b5ff[_0x1d46('0x2b')](0x1);
                _0x4f9431[_0x1d46('0x4a')](new android[(_0x1d46('0x7'))][(_0x1d46('0x8'))][(_0x1d46('0x41'))](android[_0x1d46('0x7')][_0x1d46('0xc')]['TRANSPARENT']));
                _0x3913d5[_0x1d46('0x2b')](0x1);
                _0x522463[_0x1d46('0x40')](_0x4f9431);
                _0x3913d5['addView'](_0x522463);
                var _0x51309d = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x51309d[_0x1d46('0x2d')](aimbot ? 'Aimbot:\x20ON' : _0x1d46('0x4d'));
                _0x51309d[_0x1d46('0x45')](aimbot ? android[_0x1d46('0x7')]['Color']['GREEN'] : android['graphics'][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x51309d[_0x1d46('0x47')](buttonBackground3);
                _0x51309d[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x51309d[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))]['OnClickListener']({
                    'onClick': function(_0x593a8e) {
                        if (!aimbot) {
                            aimbot = !![];
                            _0x51309d[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color'][_0x1d46('0x4f')]);
                            _0x51309d[_0x1d46('0x2d')]('Aimbot:\x20ON');
                        } else {
                            aimbot = ![];
                            _0x51309d['setTextColor'](android[_0x1d46('0x7')]['Color'][_0x1d46('0x4e')]);
                            _0x51309d[_0x1d46('0x2d')]('Aimbot:\x20OFF');
                        }
                    }
                }));
                _0x51309d[_0x1d46('0x50')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x51'))]({
                    'onLongClick': function(_0x28f5a0, _0x589d16) {
                        if (!aimbotSettingsToggle) {
                            _0x4d3e53['addView'](_0x5768ac);
                            aimbotSettingsToggle = !![];
                        } else if (aimbotSettingsToggle) {
                            _0x4d3e53[_0x1d46('0x52')](_0x5768ac);
                            aimbotSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x4f9431['addView'](_0x51309d);
                _0x4f9431[_0x1d46('0x40')](_0x4d3e53);
                var _0x5768ac = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x5768ac[_0x1d46('0x2d')](_0x1d46('0x53') + aimrange);
                _0x5768ac[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x5768ac[_0x1d46('0x47')](buttonBackground);
                _0x5768ac[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x5768ac[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x2cc73a) {
                        if (aimrange == 0x4) {
                            aimrange = 0x8;
                            _0x5768ac[_0x1d46('0x2d')]('Aimbot\x20Range:\x20' + aimrange);
                        } else if (aimrange == 0x8) {
                            aimrange = 0xc;
                            _0x5768ac[_0x1d46('0x2d')](_0x1d46('0x53') + aimrange);
                        } else if (aimrange == 0xc) {
                            aimrange = 0x10;
                            _0x5768ac[_0x1d46('0x2d')](_0x1d46('0x53') + aimrange);
                        } else if (aimrange == 0x10) {
                            aimrange = 0x4;
                            _0x5768ac[_0x1d46('0x2d')](_0x1d46('0x53') + aimrange);
                        }
                    }
                }));
                var _0x2861da = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x2861da[_0x1d46('0x2d')](hitbox ? _0x1d46('0x54') : _0x1d46('0x55'));
                _0x2861da[_0x1d46('0x45')](hitbox ? android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')] : android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x2861da[_0x1d46('0x47')](buttonBackground3);
                _0x2861da['getBackground']()[_0x1d46('0x2f')](0x96);
                _0x2861da[_0x1d46('0x3e')](new android['view'][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x32fd4d) {
                        if (!hitbox) {
                            hitbox = !![];
                            _0x2861da['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')]);
                            _0x2861da[_0x1d46('0x2d')](_0x1d46('0x54'));
                        } else {
                            hitbox = ![];
                            _0x2861da[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                            _0x2861da[_0x1d46('0x2d')](_0x1d46('0x55'));
                        }
                    }
                }));
                _0x2861da[_0x1d46('0x50')](new android['view'][(_0x1d46('0x31'))]['OnLongClickListener']({
                    'onLongClick': function(_0x5f05ad, _0x226452) {
                        if (!hitboxSettingsToggle) {
                            _0x4c7b07[_0x1d46('0x40')](_0x2947b5);
                            _0x4c7b07['addView'](_0x7f76f6);
                            hitboxSettingsToggle = !![];
                        } else if (hitboxSettingsToggle) {
                            _0x4c7b07['removeView'](_0x2947b5);
                            _0x4c7b07[_0x1d46('0x52')](_0x7f76f6);
                            hitboxSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x4f9431[_0x1d46('0x40')](_0x2861da);
                _0x4f9431[_0x1d46('0x40')](_0x4c7b07);
                var _0x2947b5 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x2947b5[_0x1d46('0x2d')](_0x1d46('0x56') + hitboxwidthval);
                _0x2947b5[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x2947b5[_0x1d46('0x47')](buttonBackground);
                _0x2947b5[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x2947b5[_0x1d46('0x3e')](new android['view']['View'][(_0x1d46('0x32'))]({
                    'onClick': function(_0x476d51) {
                        if (hitboxwidthval == 0x4) {
                            hitboxwidthval = 0x8;
                            _0x2947b5[_0x1d46('0x2d')](_0x1d46('0x56') + hitboxwidthval);
                        } else if (hitboxwidthval == 0x8) {
                            hitboxwidthval = 0xc;
                            _0x2947b5[_0x1d46('0x2d')]('Hitbox\x20Width:\x20' + hitboxwidthval);
                        } else if (hitboxwidthval == 0xc) {
                            hitboxwidthval = 0x10;
                            _0x2947b5[_0x1d46('0x2d')](_0x1d46('0x56') + hitboxwidthval);
                        } else if (hitboxwidthval == 0x10) {
                            hitboxwidthval = 0x4;
                            _0x2947b5[_0x1d46('0x2d')]('Hitbox\x20Width:\x20' + hitboxwidthval);
                        }
                    }
                }));
                var _0x7f76f6 = new android['widget'][(_0x1d46('0x2c'))](ctx);
                _0x7f76f6[_0x1d46('0x2d')]('Hitbox\x20Width:\x20' + hitboxheightval);
                _0x7f76f6['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')]['CYAN']);
                _0x7f76f6[_0x1d46('0x47')](buttonBackground);
                _0x7f76f6[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x7f76f6['setOnClickListener'](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x20ad2d) {
                        if (hitboxheightval == 0x4) {
                            hitboxheightval = 0x8;
                            _0x7f76f6[_0x1d46('0x2d')](_0x1d46('0x57') + hitboxheightval);
                        } else if (hitboxheightval == 0x8) {
                            hitboxheightval = 0xc;
                            _0x7f76f6[_0x1d46('0x2d')](_0x1d46('0x57') + hitboxheightval);
                        } else if (hitboxheightval == 0xc) {
                            hitboxheightval = 0x10;
                            _0x7f76f6[_0x1d46('0x2d')](_0x1d46('0x57') + hitboxheightval);
                        } else if (hitboxheightval == 0x10) {
                            hitboxheightval = 0x4;
                            _0x7f76f6[_0x1d46('0x2d')](_0x1d46('0x57') + hitboxheightval);
                        }
                    }
                }));
                var _0x56a5ed = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x56a5ed['setText'](hittp ? 'Hit\x20TP:\x20ON' : _0x1d46('0x58'));
                _0x56a5ed[_0x1d46('0x45')](hittp ? android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')] : android[_0x1d46('0x7')][_0x1d46('0xc')]['RED']);
                _0x56a5ed['setBackground'](buttonBackground3);
                _0x56a5ed['getBackground']()['setAlpha'](0x96);
                _0x56a5ed[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))]['OnClickListener']({
                    'onClick': function(_0x18b240) {
                        if (!hittp) {
                            hittp = !![];
                            _0x56a5ed[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color'][_0x1d46('0x4f')]);
                            _0x56a5ed[_0x1d46('0x2d')](_0x1d46('0x59'));
                        } else {
                            hittp = ![];
                            _0x56a5ed[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')]['RED']);
                            _0x56a5ed['setText'](_0x1d46('0x58'));
                        }
                    }
                }));
                _0x56a5ed[_0x1d46('0x50')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x51'))]({
                    'onLongClick': function(_0x1d110b, _0xd70ec6) {
                        if (!hittpSettingsToggle) {
                            _0x35b5ff[_0x1d46('0x40')](_0x418d20);
                            _0x35b5ff[_0x1d46('0x40')](_0x1acb5b);
                            hittpSettingsToggle = !![];
                        } else if (hittpSettingsToggle) {
                            _0x35b5ff[_0x1d46('0x52')](_0x418d20);
                            _0x35b5ff[_0x1d46('0x52')](_0x1acb5b);
                            hittpSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x4f9431[_0x1d46('0x40')](_0x56a5ed);
                _0x4f9431['addView'](_0x35b5ff);
                var _0x418d20 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                if (hittpMode == 0x1) {
                    _0x418d20[_0x1d46('0x2d')](_0x1d46('0x5a'));
                }
                if (hittpMode == 0x2) {
                    _0x418d20[_0x1d46('0x2d')](_0x1d46('0x5b'));
                }
                _0x418d20[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x418d20[_0x1d46('0x47')](buttonBackground);
                _0x418d20[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x418d20[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))]['OnClickListener']({
                    'onClick': function(_0x3f9ed9) {
                        if (hittpMode == 0x1) {
                            hittpMode = 0x2;
                            _0x418d20[_0x1d46('0x2d')](_0x1d46('0x5b'));
                        } else if (hittpMode == 0x2) {
                            hittpMode = 0x1;
                            _0x418d20[_0x1d46('0x2d')](_0x1d46('0x5a'));
                        }
                    }
                }));
                var _0x1acb5b = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x1acb5b[_0x1d46('0x2d')](_0x1d46('0x5c') + hittpvalue);
                _0x1acb5b[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color'][_0x1d46('0xd')]);
                _0x1acb5b['setBackground'](buttonBackground);
                _0x1acb5b[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x1acb5b['setOnClickListener'](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x49e5a3) {
                        hittpvalue = hittpvalue + 0x4;
                        if (hittpvalue > 0x14) {
                            hittpvalue = 0x4;
                        }
                        _0x1acb5b[_0x1d46('0x2d')]('Hit\x20TP\x20Value:\x20' + hittpvalue);
                    }
                }));
                combatGUI = new android[(_0x1d46('0x29'))][(_0x1d46('0x33'))](_0x3913d5, ctx[_0x1d46('0x5d')]()['getDefaultDisplay']()['getWidth']() / 0x3, ctx[_0x1d46('0x5d')]()['getDefaultDisplay']()[_0x1d46('0x5e')]());
                combatGUI['showAtLocation'](ctx[_0x1d46('0x38')]()[_0x1d46('0x43')](), android[_0x1d46('0x30')][_0x1d46('0x39')][_0x1d46('0x4b')] | android['view'][_0x1d46('0x39')][_0x1d46('0x5f')], 0x0, 0x0);
            } catch (_0x5f2ad2) {
                print('Simplicity\x20Client\x20-\x20Error:\x20' + _0x5f2ad2);
            }
        }
    }));
}

function movementMenu() {
    ctx[_0x1d46('0x3d')](new java[(_0x1d46('0x27'))][(_0x1d46('0x28'))]({
        'run': function() {
            try {
                var _0x58e6e1 = new android['widget'][(_0x1d46('0x2a'))](ctx);
                var _0x5111bb = new android[(_0x1d46('0x29'))][(_0x1d46('0x60'))](ctx);
                var _0x3fc978 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x58e6e1[_0x1d46('0x2b')](0x1);
                _0x58e6e1[_0x1d46('0x4a')](new android['graphics'][(_0x1d46('0x8'))][(_0x1d46('0x41'))](android['graphics'][_0x1d46('0xc')]['TRANSPARENT']));
                _0x3fc978['setOrientation'](0x1);
                _0x5111bb[_0x1d46('0x40')](_0x58e6e1);
                _0x3fc978[_0x1d46('0x40')](_0x5111bb);
                var _0x116a25 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x116a25[_0x1d46('0x2b')](0x1);
                var _0x2eba3a = new android[(_0x1d46('0x29'))]['LinearLayout'](ctx);
                _0x2eba3a[_0x1d46('0x2b')](0x1);
                var _0x19ae9c = new android['widget'][(_0x1d46('0x2a'))](ctx);
                _0x19ae9c[_0x1d46('0x2b')](0x1);
                var _0x53bb79 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x53bb79['setOrientation'](0x1);
                var _0x9acb2a = new android[(_0x1d46('0x29'))]['Button'](ctx);
                _0x9acb2a['setText'](speed ? _0x1d46('0x61') : _0x1d46('0x62'));
                _0x9acb2a[_0x1d46('0x45')](speed ? android[_0x1d46('0x7')][_0x1d46('0xc')]['GREEN'] : android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x9acb2a[_0x1d46('0x47')](buttonBackground3);
                _0x9acb2a[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x9acb2a['setOnClickListener'](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x33761d) {
                        if (!speed) {
                            speed = !![];
                            _0x9acb2a['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')]['GREEN']);
                            _0x9acb2a['setText'](_0x1d46('0x61'));
                        } else {
                            speed = ![];
                            _0x9acb2a['setTextColor'](android['graphics'][_0x1d46('0xc')][_0x1d46('0x4e')]);
                            _0x9acb2a[_0x1d46('0x2d')](_0x1d46('0x62'));
                        }
                    }
                }));
                _0x9acb2a[_0x1d46('0x50')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x51'))]({
                    'onLongClick': function(_0x5afd94, _0x560161) {
                        if (!speedSettingsToggle) {
                            _0x116a25['addView'](_0x3f1b4f);
                            _0x116a25[_0x1d46('0x40')](_0x4e8450);
                            speedSettingsToggle = !![];
                        } else if (speedSettingsToggle) {
                            _0x116a25[_0x1d46('0x52')](_0x3f1b4f);
                            _0x116a25[_0x1d46('0x52')](_0x4e8450);
                            speedSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x58e6e1[_0x1d46('0x40')](_0x9acb2a);
                _0x58e6e1['addView'](_0x116a25);
                var _0x3f1b4f = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                if (speedMode == 0x1) {
                    _0x3f1b4f[_0x1d46('0x2d')](_0x1d46('0x63'));
                }
                if (speedMode == 0x2) {
                    _0x3f1b4f[_0x1d46('0x2d')](_0x1d46('0x64'));
                }
                _0x3f1b4f[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x3f1b4f[_0x1d46('0x47')](buttonBackground);
                _0x3f1b4f[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x3f1b4f[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x5f2040) {
                        if (speedMode == 0x1) {
                            speedMode = 0x2;
                            _0x3f1b4f[_0x1d46('0x2d')](_0x1d46('0x64'));
                        } else if (speedMode == 0x2) {
                            speedMode = 0x1;
                            _0x3f1b4f['setText']('Speed\x20Mode:\x20Vanilla');
                        }
                    }
                }));
                var _0x4e8450 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x4e8450[_0x1d46('0x2d')](_0x1d46('0x65') + speedvalue);
                _0x4e8450[_0x1d46('0x45')](android['graphics'][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x4e8450[_0x1d46('0x47')](buttonBackground);
                _0x4e8450[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x4e8450['setOnClickListener'](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x5cfcfe) {
                        if (speedvalue == 0x4) {
                            speedvalue = 0x8;
                            _0x4e8450['setText'](_0x1d46('0x65') + speedvalue);
                        } else if (speedvalue == 0x8) {
                            speedvalue = 0xc;
                            _0x4e8450[_0x1d46('0x2d')](_0x1d46('0x65') + speedvalue);
                        } else if (speedvalue == 0xc) {
                            speedvalue = 0x10;
                            _0x4e8450['setText'](_0x1d46('0x65') + speedvalue);
                        } else if (speedvalue == 0x10) {
                            speedvalue = 0x4;
                            _0x4e8450[_0x1d46('0x2d')](_0x1d46('0x65') + speedvalue);
                        }
                    }
                }));
                var _0x485b1a = new android[(_0x1d46('0x29'))]['Button'](ctx);
                _0x485b1a[_0x1d46('0x2d')](spider ? _0x1d46('0x66') : _0x1d46('0x67'));
                _0x485b1a[_0x1d46('0x45')](spider ? android[_0x1d46('0x7')][_0x1d46('0xc')]['GREEN'] : android['graphics'][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x485b1a[_0x1d46('0x47')](buttonBackground3);
                _0x485b1a[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x485b1a[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x41a7c0) {
                        if (!spider) {
                            spider = !![];
                            _0x485b1a[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color'][_0x1d46('0x4f')]);
                            _0x485b1a[_0x1d46('0x2d')](_0x1d46('0x66'));
                        } else {
                            spider = ![];
                            _0x485b1a['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                            _0x485b1a[_0x1d46('0x2d')]('Spider:\x20OFF');
                        }
                    }
                }));
                _0x485b1a['setOnLongClickListener'](new android['view'][(_0x1d46('0x31'))][(_0x1d46('0x51'))]({
                    'onLongClick': function(_0x20dbd7, _0x5f2da4) {
                        if (!stepSettingsToggle) {
                            _0x2eba3a[_0x1d46('0x40')](_0x2207c0);
                            _0x2eba3a[_0x1d46('0x40')](_0x1ff9e1);
                            stepSettingsToggle = !![];
                        } else if (stepSettingsToggle) {
                            _0x2eba3a[_0x1d46('0x52')](_0x2207c0);
                            _0x2eba3a['removeView'](_0x1ff9e1);
                            stepSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x58e6e1[_0x1d46('0x40')](_0x485b1a);
                _0x58e6e1[_0x1d46('0x40')](_0x2eba3a);
                var _0x1ff9e1 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x1ff9e1['setText'](_0x1d46('0x68') + stepSpeed);
                _0x1ff9e1[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x1ff9e1['setBackground'](buttonBackground);
                _0x1ff9e1[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x1ff9e1[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x476862) {
                        stepSpeed = stepSpeed + 0.2;
                        if (stepSpeed > 0x1) {
                            stepSpeed = 0.2;
                        }
                        _0x1ff9e1[_0x1d46('0x2d')](_0x1d46('0x68') + stepSpeed);
                    }
                }));
                var _0x2207c0 = new android[(_0x1d46('0x29'))]['Button'](ctx);
                if (stepMode == 0x1) {
                    _0x2207c0[_0x1d46('0x2d')](_0x1d46('0x69'));
                }
                if (stepMode == 0x2) {
                    _0x2207c0['setText'](_0x1d46('0x6a'));
                }
                _0x2207c0[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color']['CYAN']);
                _0x2207c0[_0x1d46('0x47')](buttonBackground);
                _0x2207c0[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x2207c0[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x10580e) {
                        if (stepMode == 0x1) {
                            stepMode = 0x2;
                            _0x2207c0[_0x1d46('0x2d')](_0x1d46('0x6a'));
                        } else if (stepMode == 0x2) {
                            stepMode = 0x1;
                            _0x2207c0['setText'](_0x1d46('0x69'));
                        }
                    }
                }));
                var _0x496ae0 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x496ae0[_0x1d46('0x2d')](jesus ? _0x1d46('0x6b') : _0x1d46('0x6c'));
                _0x496ae0[_0x1d46('0x45')](jesus ? android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')] : android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x496ae0[_0x1d46('0x47')](buttonBackground3);
                _0x496ae0[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x496ae0[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x5bab1d) {
                        if (!jesus) {
                            jesus = !![];
                            _0x496ae0[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')]);
                            _0x496ae0[_0x1d46('0x2d')]('Jesus:\x20ON');
                        } else {
                            jesus = ![];
                            _0x496ae0['setTextColor'](android['graphics'][_0x1d46('0xc')][_0x1d46('0x4e')]);
                            _0x496ae0['setText'](_0x1d46('0x6c'));
                        }
                    }
                }));
                _0x496ae0['setOnLongClickListener'](new android['view'][(_0x1d46('0x31'))][(_0x1d46('0x51'))]({
                    'onLongClick': function(_0x5c0ae1, _0x48a345) {
                        if (!jesusSettingsToggle) {
                            _0x19ae9c[_0x1d46('0x40')](_0x2c783e);
                            _0x19ae9c[_0x1d46('0x40')](_0x18de04);
                            jesusSettingsToggle = !![];
                        } else if (jesusSettingsToggle) {
                            _0x19ae9c[_0x1d46('0x52')](_0x2c783e);
                            _0x19ae9c[_0x1d46('0x52')](_0x18de04);
                            jesusSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x58e6e1[_0x1d46('0x40')](_0x496ae0);
                _0x58e6e1[_0x1d46('0x40')](_0x19ae9c);
                var _0x2c783e = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                if (jesusMode == 0x1) {
                    _0x2c783e[_0x1d46('0x2d')](_0x1d46('0x6d'));
                }
                if (jesusMode == 0x2) {
                    _0x2c783e[_0x1d46('0x2d')](_0x1d46('0x6e'));
                }
                _0x2c783e['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x2c783e[_0x1d46('0x47')](buttonBackground);
                _0x2c783e[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x2c783e[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))]['View'][(_0x1d46('0x32'))]({
                    'onClick': function(_0x2cac7b) {
                        if (jesusMode == 0x1) {
                            jesusMode = 0x2;
                            _0x2c783e[_0x1d46('0x2d')](_0x1d46('0x6e'));
                        } else if (jesusMode == 0x2) {
                            jesusMode = 0x1;
                            _0x2c783e[_0x1d46('0x2d')]('Jesus\x20Mode:\x20Velocity');
                        }
                    }
                }));
                var _0x18de04 = new android[(_0x1d46('0x29'))]['Button'](ctx);
                _0x18de04[_0x1d46('0x2d')](_0x1d46('0x6f') + jesusvalue);
                _0x18de04[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color'][_0x1d46('0xd')]);
                _0x18de04[_0x1d46('0x47')](buttonBackground);
                _0x18de04[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x18de04[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x241f38) {
                        jesusvalue = jesusvalue + 0.1;
                        if (jesusvalue > 0x2) {
                            jesusvalue = 0.1;
                        }
                        _0x18de04[_0x1d46('0x2d')](_0x1d46('0x6f') + jesusvalue);
                    }
                }));
                var _0x1594d5 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x1594d5[_0x1d46('0x2d')](nodownglide ? _0x1d46('0x70') : _0x1d46('0x71'));
                _0x1594d5[_0x1d46('0x45')](nodownglide ? android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')] : android[_0x1d46('0x7')]['Color']['RED']);
                _0x1594d5[_0x1d46('0x47')](buttonBackground3);
                _0x1594d5[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x1594d5[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x3db5e0) {
                        if (!nodownglide) {
                            nodownglide = !![];
                            _0x1594d5[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color'][_0x1d46('0x4f')]);
                            _0x1594d5[_0x1d46('0x2d')](_0x1d46('0x70'));
                        } else {
                            nodownglide = ![];
                            _0x1594d5[_0x1d46('0x45')](android['graphics'][_0x1d46('0xc')]['RED']);
                            _0x1594d5[_0x1d46('0x2d')](_0x1d46('0x71'));
                        }
                    }
                }));
                _0x1594d5[_0x1d46('0x50')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x51'))]({
                    'onLongClick': function(_0x3d045b, _0x15a691) {
                        if (!nodownglideSettingsToggle) {
                            _0x53bb79[_0x1d46('0x40')](_0x469b92);
                            _0x53bb79[_0x1d46('0x40')](_0x299206);
                            nodownglideSettingsToggle = !![];
                        } else if (nodownglideSettingsToggle) {
                            _0x53bb79['removeView'](_0x469b92);
                            _0x53bb79[_0x1d46('0x52')](_0x299206);
                            nodownglideSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x58e6e1['addView'](_0x1594d5);
                _0x58e6e1[_0x1d46('0x40')](_0x53bb79);
                var _0x469b92 = new android['widget'][(_0x1d46('0x2c'))](ctx);
                if (nodownglideMode == 0x1) _0x469b92[_0x1d46('0x2d')](_0x1d46('0x72'));
                if (nodownglideMode == 0x2) _0x469b92[_0x1d46('0x2d')]('NoDownGlide\x20Value\x20Incrementer:\x20POSITIVE');
                if (nodownglideMode == 0x3) _0x469b92[_0x1d46('0x2d')](_0x1d46('0x73'));
                _0x469b92[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')]['CYAN']);
                _0x469b92[_0x1d46('0x47')](buttonBackground);
                _0x469b92[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x469b92['setOnClickListener'](new android['view'][(_0x1d46('0x31'))]['OnClickListener']({
                    'onClick': function(_0x17eadb) {
                        if (nodownglideMode == 0x1) {
                            nodownglideMode = 0x2;
                            _0x469b92[_0x1d46('0x2d')](_0x1d46('0x74'));
                        } else if (nodownglideMode == 0x2) {
                            nodownglideMode = 0x3;
                            _0x469b92[_0x1d46('0x2d')](_0x1d46('0x73'));
                        } else if (nodownglideMode == 0x3) {
                            nodownglideMode = 0x1;
                            _0x469b92[_0x1d46('0x2d')]('NoDownGlide\x20Value\x20Incrementer:\x20DEFAULT');
                        }
                    }
                }));
                var _0x299206 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x299206[_0x1d46('0x2d')](_0x1d46('0x75') + nodownglideval);
                _0x299206[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x299206[_0x1d46('0x47')](buttonBackground);
                _0x299206['getBackground']()[_0x1d46('0x2f')](0x96);
                _0x299206['setOnClickListener'](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))]['OnClickListener']({
                    'onClick': function(_0x5f2f6e) {
                        if (nodownglideMode == 0x1) {
                            nodownglideval = 0x0;
                            _0x299206[_0x1d46('0x2d')]('NoDownGlide\x20Value:\x20' + nodownglideval);
                        }
                        if (nodownglideMode == 0x2) {
                            nodownglideval = nodownglideval + 0.4;
                            _0x299206[_0x1d46('0x2d')](_0x1d46('0x75') + nodownglideval);
                        }
                        if (nodownglideMode == 0x3) {
                            nodownglideval = nodownglideval - 0.4;
                            _0x299206[_0x1d46('0x2d')](_0x1d46('0x75') + nodownglideval);
                        }
                    }
                }));
                movementGUI = new android[(_0x1d46('0x29'))][(_0x1d46('0x33'))](_0x3fc978, ctx['getWindowManager']()[_0x1d46('0x76')]()['getWidth']() / 0x3, ctx[_0x1d46('0x5d')]()[_0x1d46('0x76')]()[_0x1d46('0x5e')]());
                movementGUI[_0x1d46('0x37')](ctx['getWindow']()[_0x1d46('0x43')](), android[_0x1d46('0x30')]['Gravity'][_0x1d46('0x4b')] | android[_0x1d46('0x30')][_0x1d46('0x39')][_0x1d46('0x5f')], 0x0, 0x0);
            } catch (_0x30b15e) {
                print('Simplicity\x20Client\x20-\x20Error:\x20' + err);
            }
        }
    }));
}

function playerMenu() {
    ctx[_0x1d46('0x3d')](new java['lang'][(_0x1d46('0x28'))]({
        'run': function() {
            try {
                var _0x292228 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                var _0x34818c = new android[(_0x1d46('0x29'))]['ScrollView'](ctx);
                var _0x46199d = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x292228[_0x1d46('0x2b')](0x1);
                _0x292228['setBackgroundDrawable'](new android[(_0x1d46('0x7'))][(_0x1d46('0x8'))]['ColorDrawable'](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x42')]));
                _0x46199d[_0x1d46('0x2b')](0x1);
                _0x34818c['addView'](_0x292228);
                _0x46199d[_0x1d46('0x40')](_0x34818c);
                var _0xafc20e = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0xafc20e['setOrientation'](0x1);
                var _0x573da5 = new android['widget'][(_0x1d46('0x2c'))](ctx);
                _0x573da5[_0x1d46('0x2d')](flight ? 'Flight:\x20ON' : 'Flight:\x20OFF');
                _0x573da5[_0x1d46('0x45')](flight ? android[_0x1d46('0x7')][_0x1d46('0xc')]['GREEN'] : android[_0x1d46('0x7')]['Color'][_0x1d46('0x4e')]);
                _0x573da5[_0x1d46('0x47')](buttonBackground3);
                _0x573da5[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x573da5[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))]['OnClickListener']({
                    'onClick': function(_0x2a3c4c) {
                        if (!flight) {
                            flight = !![];
                            Player[_0x1d46('0x77')](0x1);
                            _0x573da5['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')]);
                            _0x573da5['setText'](_0x1d46('0x78'));
                        } else {
                            flight = ![];
                            Player['setCanFly'](0x0);
                            _0x573da5[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                            _0x573da5[_0x1d46('0x2d')](_0x1d46('0x79'));
                        }
                    }
                }));
                _0x292228[_0x1d46('0x40')](_0x573da5);
                var _0x57184f = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x57184f[_0x1d46('0x2d')](bouncefly ? _0x1d46('0x7a') : _0x1d46('0x7b'));
                _0x57184f[_0x1d46('0x45')](bouncefly ? android['graphics'][_0x1d46('0xc')][_0x1d46('0x4f')] : android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x57184f[_0x1d46('0x47')](buttonBackground3);
                _0x57184f['getBackground']()['setAlpha'](0x96);
                _0x57184f[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x54f0b8) {
                        if (!bouncefly) {
                            bouncefly = !![];
                            _0x57184f[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color'][_0x1d46('0x4f')]);
                            _0x57184f[_0x1d46('0x2d')](_0x1d46('0x7a'));
                        } else {
                            bouncefly = ![];
                            _0x57184f[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                            _0x57184f['setText'](_0x1d46('0x7b'));
                        }
                    }
                }));
                _0x292228[_0x1d46('0x40')](_0x57184f);
                var _0x1de796 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x1de796['setText'](nofall ? _0x1d46('0x7c') : _0x1d46('0x7d'));
                _0x1de796['setTextColor'](nofall ? android[_0x1d46('0x7')][_0x1d46('0xc')]['GREEN'] : android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x1de796[_0x1d46('0x47')](buttonBackground3);
                _0x1de796[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x1de796[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x417ab5) {
                        if (!nofall) {
                            nofall = !![];
                            _0x1de796[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')]);
                            _0x1de796[_0x1d46('0x2d')](_0x1d46('0x7c'));
                        } else {
                            nofall = ![];
                            _0x1de796[_0x1d46('0x45')](android[_0x1d46('0x7')]['Color'][_0x1d46('0x4e')]);
                            _0x1de796[_0x1d46('0x2d')](_0x1d46('0x7d'));
                        }
                    }
                }));
                _0x292228[_0x1d46('0x40')](_0x1de796);
                var _0x54f6bd = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x54f6bd['setText'](spam ? 'SPAM:\x20ON' : _0x1d46('0x7e'));
                _0x54f6bd[_0x1d46('0x45')](spam ? android['graphics'][_0x1d46('0xc')][_0x1d46('0x4f')] : android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x54f6bd[_0x1d46('0x47')](buttonBackground3);
                _0x54f6bd[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x54f6bd[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))]['OnClickListener']({
                    'onClick': function(_0x56b3bc) {
                        if (!spam) {
                            spam = !![];
                            _0x54f6bd['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')]['GREEN']);
                            _0x54f6bd[_0x1d46('0x2d')]('SPAM:\x20ON');
                        } else {
                            spam = ![];
                            _0x54f6bd[_0x1d46('0x45')](android['graphics'][_0x1d46('0xc')][_0x1d46('0x4e')]);
                            _0x54f6bd[_0x1d46('0x2d')](_0x1d46('0x7e'));
                        }
                    }
                }));
                _0x54f6bd[_0x1d46('0x50')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x51'))]({
                    'onLongClick': function(_0x2caf32, _0x1fe4dc) {
                        if (!spamSettingsToggle) {
                            _0xafc20e[_0x1d46('0x40')](_0x27d9aa);
                            _0xafc20e[_0x1d46('0x40')](_0x12ad2f);
                            spamSettingsToggle = !![];
                        } else if (spamSettingsToggle) {
                            _0xafc20e[_0x1d46('0x52')](_0x27d9aa);
                            _0xafc20e['removeView'](_0x12ad2f);
                            spamSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x292228[_0x1d46('0x40')](_0x54f6bd);
                _0x292228[_0x1d46('0x40')](_0xafc20e);
                var _0x27d9aa = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                if (spamMode == 0x1) _0x27d9aa['setText'](_0x1d46('0x7f'));
                if (spamMode == 0x2) _0x27d9aa[_0x1d46('0x2d')](_0x1d46('0x80'));
                if (spamMode == 0x3) _0x27d9aa[_0x1d46('0x2d')](_0x1d46('0x81'));
                _0x27d9aa[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x27d9aa[_0x1d46('0x47')](buttonBackground);
                _0x27d9aa[_0x1d46('0x2e')]()['setAlpha'](0x96);
                _0x27d9aa['setOnClickListener'](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x3d5131) {
                        if (spamMode == 0x1) {
                            spamMode = 0x2;
                            _0x27d9aa[_0x1d46('0x2d')](_0x1d46('0x80'));
                        } else if (spamMode == 0x2) {
                            spamMode = 0x3;
                            _0x27d9aa[_0x1d46('0x2d')](_0x1d46('0x81'));
                        } else if (spamMode == 0x3) {
                            spamMode = 0x1;
                            _0x27d9aa[_0x1d46('0x2d')](_0x1d46('0x7f'));
                        }
                    }
                }));
                var _0x12ad2f = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x12ad2f['setText'](_0x1d46('0x82') + spamdelaytick);
                _0x12ad2f['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x12ad2f[_0x1d46('0x47')](buttonBackground);
                _0x12ad2f[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x12ad2f[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x5dcf51) {
                        spamdelaytick = spamdelaytick + 0xc8;
                        _0x12ad2f[_0x1d46('0x2d')](_0x1d46('0x82') + spamdelaytick);
                        if (spamdelaytick > 0x1388) {
                            spamdelaytick = 0xc8;
                            _0x12ad2f[_0x1d46('0x2d')]('Spam\x20Delay:\x20' + spamdelaytick);
                        }
                    }
                }));
                playerGUI = new android[(_0x1d46('0x29'))][(_0x1d46('0x33'))](_0x46199d, ctx['getWindowManager']()[_0x1d46('0x76')]()[_0x1d46('0x83')]() / 0x3, ctx[_0x1d46('0x5d')]()['getDefaultDisplay']()[_0x1d46('0x5e')]());
                playerGUI['showAtLocation'](ctx[_0x1d46('0x38')]()[_0x1d46('0x43')](), android[_0x1d46('0x30')]['Gravity'][_0x1d46('0x4b')] | android[_0x1d46('0x30')]['Gravity'][_0x1d46('0x5f')], 0x0, 0x0);
            } catch (_0xb8f81b) {
                print(_0x1d46('0x3c') + _0xb8f81b);
            }
        }
    }));
}

function exploitsMenu() {
    ctx[_0x1d46('0x3d')](new java[(_0x1d46('0x27'))][(_0x1d46('0x28'))]({
        'run': function() {
            try {
                var _0x1bc390 = new android['widget'][(_0x1d46('0x2a'))](ctx);
                var _0x5d528 = new android[(_0x1d46('0x29'))][(_0x1d46('0x60'))](ctx);
                var _0x6700 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x1bc390[_0x1d46('0x2b')](0x1);
                var _0x24273c = new android[(_0x1d46('0x29'))][(_0x1d46('0x2a'))](ctx);
                _0x24273c[_0x1d46('0x2b')](0x1);
                var _0x1918fd = new android['widget']['Button'](ctx);
                _0x1918fd[_0x1d46('0x2d')](itemduper ? _0x1d46('0x84') : _0x1d46('0x85'));
                _0x1918fd[_0x1d46('0x45')](itemduper ? android[_0x1d46('0x7')]['Color'][_0x1d46('0x4f')] : android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4e')]);
                _0x1918fd[_0x1d46('0x47')](buttonBackground3);
                _0x1918fd[_0x1d46('0x2e')]()['setAlpha'](0x96);
                _0x1918fd[_0x1d46('0x3e')](new android['view'][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x2119b0) {
                        if (!itemduper) {
                            itemduper = !![];
                            _0x1918fd['setTextColor'](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0x4f')]);
                            _0x1918fd[_0x1d46('0x2d')]('Item\x20Duper:\x20ON');
                        } else {
                            itemduper = ![];
                            _0x1918fd['setText'](_0x1d46('0x85'));
                            _0x1918fd[_0x1d46('0x45')](android['graphics'][_0x1d46('0xc')][_0x1d46('0x4e')]);
                        }
                    }
                }));
                _0x1918fd[_0x1d46('0x50')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x51'))]({
                    'onLongClick': function(_0x3c7ea4, _0x231a78) {
                        if (!itemduperSettingsToggle) {
                            _0x24273c[_0x1d46('0x40')](_0x453b41);
                            _0x24273c[_0x1d46('0x40')](_0x54ab77);
                            itemduperSettingsToggle = !![];
                        } else if (itemduperSettingsToggle) {
                            _0x24273c[_0x1d46('0x52')](_0x453b41);
                            _0x24273c[_0x1d46('0x52')](_0x54ab77);
                            itemduperSettingsToggle = ![];
                        }
                        return !![];
                    }
                }));
                _0x1bc390[_0x1d46('0x40')](_0x1918fd);
                _0x1bc390[_0x1d46('0x40')](_0x24273c);
                var _0x453b41 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                if (itemduperMode == 0x1) _0x453b41[_0x1d46('0x2d')](_0x1d46('0x86'));
                if (itemduperMode == 0x2) _0x453b41[_0x1d46('0x2d')](_0x1d46('0x87'));
                _0x453b41['setTextColor'](android['graphics'][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x453b41['setBackground'](buttonBackground);
                _0x453b41[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x453b41[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x145df8) {
                        if (itemduperMode == 0x1) {
                            itemduperMode = 0x2;
                            _0x453b41[_0x1d46('0x2d')](_0x1d46('0x87'));
                        } else if (itemduperMode == 0x2) {
                            itemduperMode = 0x1;
                            _0x453b41[_0x1d46('0x2d')]('Item\x20Duper\x20Mode:\x20Simplicity');
                        }
                    }
                }));
                var _0x54ab77 = new android[(_0x1d46('0x29'))][(_0x1d46('0x2c'))](ctx);
                _0x54ab77['setText'](_0x1d46('0x88') + itemDuperTickValue);
                _0x54ab77[_0x1d46('0x45')](android[_0x1d46('0x7')][_0x1d46('0xc')][_0x1d46('0xd')]);
                _0x54ab77['setBackground'](buttonBackground);
                _0x54ab77[_0x1d46('0x2e')]()[_0x1d46('0x2f')](0x96);
                _0x54ab77[_0x1d46('0x3e')](new android[(_0x1d46('0x30'))][(_0x1d46('0x31'))][(_0x1d46('0x32'))]({
                    'onClick': function(_0x36bf86) {
                        itemDuperTickValue = itemDuperTickValue + 0xc8;
                        _0x54ab77[_0x1d46('0x2d')](_0x1d46('0x88') + itemDuperTickValue);
                        if (itemDuperTickValue > 0x1388) {
                            itemDuperTickValue = 0xc8;
                            _0x54ab77[_0x1d46('0x2d')]('Item\x20Duper\x20Delay:\x20' + itemDuperTickValue);
                        }
                    }
                }));
                _0x1bc390[_0x1d46('0x4a')](new android[(_0x1d46('0x7'))][(_0x1d46('0x8'))]['ColorDrawable'](android[_0x1d46('0x7')][_0x1d46('0xc')]['TRANSPARENT']));
                _0x6700[_0x1d46('0x2b')](0x1);
                _0x5d528[_0x1d46('0x40')](_0x1bc390);
                _0x6700[_0x1d46('0x40')](_0x5d528);
                exploitsGUI = new android[(_0x1d46('0x29'))][(_0x1d46('0x33'))](_0x6700, ctx[_0x1d46('0x5d')]()[_0x1d46('0x76')]()[_0x1d46('0x83')]() / 0x3, ctx['getWindowManager']()[_0x1d46('0x76')]()['getHeight']());
                exploitsGUI[_0x1d46('0x37')](ctx['getWindow']()[_0x1d46('0x43')](), android[_0x1d46('0x30')][_0x1d46('0x39')]['TOP'] | android[_0x1d46('0x30')]['Gravity'][_0x1d46('0x5f')], 0x0, 0x0);
            } catch (_0x39976) {
                print(_0x1d46('0x3c') + _0x39976);
            }
        }
    }));
}

function modTick() {
    if (aimbot) {
        var _0x8a544e = Simplicity[_0x1d46('0x89')][_0x1d46('0x8a')](aimrange);
        if (_0x8a544e != null) Simplicity[_0x1d46('0x48')][_0x1d46('0x8b')](_0x8a544e);
    }
    if (hitbox) {
        var _0x8a544e = Simplicity['World'][_0x1d46('0x8a')](0xc);
        if (_0x8a544e != null) Entity['setCollisionSize'](_0x8a544e, hitboxwidthval, hitboxheightval);
    }
    if (spider && Simplicity[_0x1d46('0x48')]['isCollided']() && stepMode == 0x1) {
        setVelY(getPlayerEnt(), stepSpeed);
    }
    if (spider && Simplicity[_0x1d46('0x48')]['isCollided']() && stepMode == 0x2) {
        setPosition(getPlayerEnt(), Player[_0x1d46('0x12')](), Player['getY']() + stepSpeed, Player[_0x1d46('0x14')]());
    }
    if (nofall && Simplicity[_0x1d46('0x48')][_0x1d46('0x8c')]() && getTile(Player[_0x1d46('0x12')](), Player[_0x1d46('0x13')]() - 0x2, Player[_0x1d46('0x14')]()) != 0x0) {
        setVelY(getPlayerEnt(), 0x0);
    }
    if (nofall && Entity[_0x1d46('0x15')](getPlayerEnt()) < -0.8 && getTile(Player[_0x1d46('0x12')](), Player[_0x1d46('0x13')]() - 0x8, Player[_0x1d46('0x14')]()) != 0x0) {
        setVelY(getPlayerEnt(), 0x0);
    }
    if (jesus && Simplicity[_0x1d46('0x48')][_0x1d46('0x8d')]() && jesusMode == 0x1) {
        setVelY(getPlayerEnt(), jesusvalue);
    }
    if (jesus && Simplicity[_0x1d46('0x48')][_0x1d46('0x8d')]() && jesusMode == 0x2) {
        setPosition(getPlayerEnt(), Player[_0x1d46('0x12')](), Player[_0x1d46('0x13')]() + jesusvalue, Player[_0x1d46('0x14')]());
    }
    if (bouncefly && Simplicity[_0x1d46('0x48')][_0x1d46('0x8c')]()) {
        setVelY(getPlayerEnt(), 0.5);
    }
    if (speed && Simplicity['Player'][_0x1d46('0x8e')]() && speedMode == 0x1) {
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * speedvalue);
        setVelZ(getPlayerEnt(), Entity[_0x1d46('0x8f')](getPlayerEnt()) * speedvalue);
    }
    if (nodownglide) {
        setVelY(getPlayerEnt(), nodownglideval);
    }
}

function attackHook(_0x190946, _0x160daa) {
    if (hittp && hittpMode == 0x1) {
        setPosition(_0x190946, Entity[_0x1d46('0x12')](_0x160daa) + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * hittpvalue), Entity[_0x1d46('0x13')](_0x160daa) + Math[_0x1d46('0x11')](Math['random']() * hittpvalue), Entity[_0x1d46('0x14')](_0x160daa) + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * hittpvalue));
    }
    if (hittp && hittpMode == 0x2) {
        setPosition(_0x190946, Entity[_0x1d46('0x12')](_0x160daa) + Math['floor'](Math[_0x1d46('0x90')]() * hittpvalue), Entity[_0x1d46('0x13')](_0x160daa), Entity[_0x1d46('0x14')](_0x160daa) + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * hittpvalue));
    }
}

function itemDuperTick() {
    ctx[_0x1d46('0x3d')](new java['lang'][(_0x1d46('0x28'))]({
        'run': function() {
            new android['os'][(_0x1d46('0x91'))]()[_0x1d46('0x92')](new java['lang'][(_0x1d46('0x28'))]({
                'run': function() {
                    if (itemduper && itemduperMode == 0x1) {
                        Player[_0x1d46('0x93')](Player[_0x1d46('0x94')](), '[' + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * 0x64) + _0x1d46('0x95') + '\x20[' + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * 0x64) + ']');
                    }
                    if (itemduper && itemduperMode == 0x2) {
                        Player[_0x1d46('0x93')](Player[_0x1d46('0x94')](), '[' + Math[_0x1d46('0x11')](Math['random']() * 0x64) + ']\x20' + Entity[_0x1d46('0x1b')](getPlayerEnt()) + _0x1d46('0x96') + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * 0x64) + ']');
                    }
                    eval(itemDuperTick());
                }
            }), itemDuperTickValue);
        }
    }));
}
itemDuperTick();

function stableSpeedFunc() {
    ctx[_0x1d46('0x3d')](new java[(_0x1d46('0x27'))][(_0x1d46('0x28'))]({
        'run': function() {
            new android['os'][(_0x1d46('0x91'))]()[_0x1d46('0x92')](new java[(_0x1d46('0x27'))]['Runnable']({
                'run': function() {
                    if (speed && Simplicity[_0x1d46('0x48')][_0x1d46('0x8e')]() && speedMode == 0x2) {
                        setVelX(getPlayerEnt(), Entity[_0x1d46('0x97')](getPlayerEnt()) * speedvalue);
                        setVelZ(getPlayerEnt(), Entity[_0x1d46('0x8f')](getPlayerEnt()) * speedvalue);
                    }
                    eval(stableSpeedFunc());
                }
            }), 0x1c2);
        }
    }));
}
stableSpeedFunc();

function delaySpamFunc() {
    try {
        ctx[_0x1d46('0x3d')](new java['lang'][(_0x1d46('0x28'))]({
            'run': function() {
                new android['os'][(_0x1d46('0x91'))]()[_0x1d46('0x92')](new java[(_0x1d46('0x27'))][(_0x1d46('0x28'))]({
                    'run': function() {
                        if (spam && spamMode == 0x1) {
                            Server[_0x1d46('0x98')]('[' + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * 0x64) + ']\x20Simplicity\x20[' + Math[_0x1d46('0x11')](Math['random']() * 0x64) + ']');
                        }
                        if (spam && spamMode == 0x2) {
                            var _0x3ab651 = [_0x1d46('0x99') + Entity[_0x1d46('0x1b')](getPlayerEnt()), 'Who\x20eats\x20Cookies?', _0x1d46('0x9a') + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * 0x64), '4D\x20Skins\x20are\x20amazing!', 'ModPE\x20is\x20cool!', _0x1d46('0x9b'), _0x1d46('0x9c')];
                            var _0x228a9 = _0x3ab651[Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * _0x3ab651[_0x1d46('0x22')])];
                            Server[_0x1d46('0x98')](_0x228a9);
                        }
                        if (spam && spamMode == 0x3) {
                            Server[_0x1d46('0x98')]('[' + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * 0x64) + ']' + '\x20[' + Math[_0x1d46('0x11')](Math[_0x1d46('0x90')]() * 0x64) + ']');
                        }
                        eval(delaySpamFunc());
                    }
                }), spamdelaytick);
            }
        }));
    } catch (_0xc40385) {
        print(_0x1d46('0x9d') + _0xc40385);
    }
}
delaySpamFunc();
checkBannedUsers();

function checkBannedUsers() {
    try {
        var _0x23d30c = new java[(_0x1d46('0x9e'))][(_0x1d46('0x9f'))](_0x1d46('0xa0'));
        var _0x28ee74 = _0x23d30c[_0x1d46('0xa1')]();
        var _0x1ef036 = _0x28ee74[_0x1d46('0xa2')]();
        var _0x4983e6 = new java['io']['BufferedReader'](new java['io']['InputStreamReader'](_0x1ef036));
        var _0x1ba513 = _0x4983e6['readLine']();
        var _0x6d696 = JSON[_0x1d46('0xa3')](_0x1ba513);
        if (Simplicity[_0x1d46('0x19')][_0x1d46('0x1a')](_0x6d696['bans'], Entity['getNameTag'](getPlayerEnt()))) {
            print(_0x1d46('0xa4'));
        }
        if (!Simplicity[_0x1d46('0x19')][_0x1d46('0x1a')](_0x6d696[_0x1d46('0xa5')], Entity['getNameTag'](getPlayerEnt()))) {
            mainMenuBtn();
            checkUpdate();
        }
    } catch (_0x507c77) {
        print(_0x1d46('0xa6') + _0x507c77);
    }
}

function checkUpdate() {
    try {
        var _0x14a23d = new java[(_0x1d46('0x9e'))][(_0x1d46('0x9f'))](_0x1d46('0xa7'));
        var _0x572715 = _0x14a23d[_0x1d46('0xa1')]();
        var _0x340b3a = _0x572715[_0x1d46('0xa2')]();
        var _0x505ed3 = new java['io'][(_0x1d46('0xa8'))](new java['io']['InputStreamReader'](_0x340b3a));
        var _0x55ec24 = _0x505ed3[_0x1d46('0xa9')]();
        if (clientversion != _0x55ec24) {
            print(_0x1d46('0xaa'));
        }
        if (clientversion == _0x55ec24) {
            print(_0x1d46('0xab'));
        }
    } catch (_0xef0753) {
        print(_0x1d46('0xac'));
    }
}
